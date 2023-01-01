<script lang="ts">
	import { A, Button, Helper, Input, Label } from "flowbite-svelte"

	import { dev } from "$app/environment"
	import { goto } from "$app/navigation"
	import { TITLE_PREFIX } from "$lib/constants"
	import { auth } from "$lib/stores/auth"

	let email = ""
	let password = ""

	let emailColor: undefined | "red" = undefined
	let passwordColor: undefined | "red" = undefined

	let emailError = ""
	let passwordError = ""

	$: inputHasProblems = email === "" || password === ""

	async function signIn() {
		const authCode = await auth.signIn(email, password)
		if (dev) console.log("Sign In auth code:", authCode)

		// reset errors before updating them
		emailError = ""
		passwordError = ""

		switch (authCode) {
			// no error
			case "": {
				throw goto("/")
			}

			case "auth/user-not-found": {
				emailError = "User with this Email does not exist"
				break
			}

			case "auth/invalid-email": {
				emailError = "Invalid Email"
				break
			}

			case "auth/invalid-password": {
				passwordError = "Invalid Password"
				break
			}
			case "auth/wrong-password": {
				passwordError = "Wrong Password"
				break
			}
		}
	}
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Log In</title>
</svelte:head>

<div class="text-center">
	<h1 class="my-3 text-3xl font-semibold text-gray-700">Log In</h1>
</div>

<form on:submit|preventDefault>
	<div>
		<Label for="email" color={emailColor}>Email</Label>
		<Input id="email" color={emailColor} type="text" required bind:value={email} />
		<Helper color="red">{emailError}</Helper>
	</div>

	<div>
		<Label for="password" color={passwordColor}>Password</Label>
		<Input id="password" color={passwordColor} type="password" required bind:value={password} />
		<Helper color="red">{passwordError}</Helper>
	</div>

	<Button class="mt-2" on:click={signIn} disabled={inputHasProblems}>Login</Button>

	<Label>Don't have an account yet? <A href="/signup">Create an Account</A>!</Label>
</form>

<style lang="scss">
	form {
		/* size */
		@apply w-96;

		/* layout */
		@apply flex flex-col gap-2;
	}
</style>
