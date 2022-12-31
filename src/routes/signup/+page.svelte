<script lang="ts">
	import { TITLE_PREFIX } from "$lib/constants"
	import { goto } from "$app/navigation"
	import { auth } from "$lib/stores/auth"
	import { dev } from "$app/environment"

	import { Input, Label, Checkbox, A, Button, Helper, Popover } from "flowbite-svelte"

	let email = ""
	let username = ""
	let password = ""
	let passwordConfirm = ""
	let agreed = false

	let emailError = ""
	let usernameError = ""
	let passwordError = ""
	let passwordConfirmError = ""

	$: inputHasProblems =
		email === "" || username === "" || password === "" || passwordConfirm === "" || agreed === false

	$: if (passwordConfirm && password !== passwordConfirm) {
		passwordConfirmError = "Password does not match"
	} else {
		passwordConfirmError = ""
	}

	async function signUp() {
		const authCode = await auth.signUp(email, password)
		if (dev) console.log("Sign Up auth code", authCode)

		// reset errors  before updating them
		emailError = ""
		usernameError = ""
		passwordError = ""
		passwordConfirmError = ""

		switch (authCode) {
			case "": {
				throw goto("/")
			}

			case "auth/email-already-in-use": {
				emailError = "Email already in use"
				break
			}

			case "auth/invalid-email": {
				emailError = "Invalid Email Address"
				break
			}

			case "auth/email-already-exists": {
				emailError = "Email Already Exists"
				break
			}

			case "auth/wrong-password": {
				passwordError = "Invalid Password"
				break
			}
		}
	}
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Sign Up</title>
</svelte:head>

<div class="text-center">
	<h1 class="my-3 text-3xl font-semibold text-gray-700">Sign Up</h1>
</div>

<form on:submit|preventDefault>
	<div class="container">
		<div>
			<Label for="email" color={emailError === "" ? undefined : "red"}>Email</Label>
			<Input
				id="email"
				color={emailError === "" ? undefined : "red"}
				type="text"
				required
				bind:value={email}
			/>
			<Helper color="red">{emailError}</Helper>
			<Popover triggeredBy="#email" placement="bottom">
				Used for user verification, password reset, change of terms, etc.
			</Popover>
		</div>

		<div>
			<Label for="username" color={usernameError === "" ? undefined : "red"}>Username</Label>
			<Input
				id="username"
				color={usernameError === "" ? undefined : "red"}
				type="text"
				required
				bind:value={username}
			/>
			<Helper color="red">{usernameError}</Helper>

			<Popover triggeredBy="#username" placement="bottom">
				Others will recognize you by this name.
			</Popover>
		</div>

		<div>
			<Label for="password" color={passwordError === "" ? undefined : "red"}>Password</Label>
			<Input
				id="password"
				color={passwordError === "" ? undefined : "red"}
				type="password"
				required
				bind:value={password}
			/>
			<Helper color="red">{passwordError}</Helper>
			<Popover triggeredBy="#password" placement="bottom">Must have at least 8 Letters.</Popover>
		</div>

		<div>
			<Label for="confirm_password" color={passwordConfirmError === "" ? undefined : "red"}
				>Confirm password</Label
			>
			<Input
				id="confirm_password"
				color={passwordConfirmError === "" ? undefined : "red"}
				type="password"
				required
				bind:value={passwordConfirm}
			/>
			<Helper color="red">{passwordConfirmError}</Helper>
		</div>
	</div>

	<Checkbox required bind:checked={agreed}>
		I agree with the&nbsp;<A href="https://exyleio-docs.web.app/tos">ToS</A>&nbsp; and the&nbsp;<A
			href="https://exyleio-docs.web.app/eula">EULA</A
		>.
	</Checkbox>

	<Button on:click={signUp} disabled={inputHasProblems}>Sign Up</Button>
</form>

<style lang="scss">
	form {
		/* layout */
		@apply flex flex-col gap-6;

		.container {
			@apply grid gap-6 md:grid-cols-2;
		}
	}
</style>
