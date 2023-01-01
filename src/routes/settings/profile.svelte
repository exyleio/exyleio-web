<script>
	import { auth } from "$lib/stores/auth"
	import { session } from "$lib/stores/session"
	import { Button, ButtonGroup, Heading, Input, Label } from "flowbite-svelte"
	import { toast } from "@zerodevx/svelte-toast"

	async function sendVerificationEmail() {
		await auth.sendVerificationEmail()
		toast.push(`<strong>Sent Verification Email!</strong><br>
Check your inbox`)
	}
</script>

<div>
	<Heading tag="h2">Profile</Heading>

	<Label for="email" class="mb-2">
		Email

		{#if $session?.emailVerified}
			(verified)
		{:else}
			(not verified)
		{/if}
	</Label>

	<ButtonGroup class="w-full">
		<Input id="email" type="email" value={$session?.email || undefined} />
		{#if !$session?.emailVerified}
			<Button on:click={sendVerificationEmail}>verify</Button>
		{/if}
	</ButtonGroup>
</div>
