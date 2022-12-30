<script lang="ts">
	import { goto } from "$app/navigation"
	import { TITLE_PREFIX } from "$lib/constants"
	import { auth } from "$lib/stores/auth"

	let email: string
	let password: string
	let error: string

	async function signUp() {
		error = await auth.signUp(email, password)
		if (error === "") throw goto("/")
	}

	async function signIn() {
		error = await auth.signIn(email, password)
		if (error === "") throw goto("/")
	}
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Login</title>
</svelte:head>

<div class="mx-auto max-w-xl p-5">
	<div class="text-center">
		<h1 class="my-3 text-3xl font-semibold text-gray-700">Log In</h1>
	</div>

	<form on:submit|preventDefault>
		<input
			type="text"
			placeholder="Username"
			required
			bind:value={email}
			class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
		/>
		<input
			type="password"
			placeholder="Password"
			required
			bind:value={password}
			class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
		/>

		<button
			class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
			on:click={signUp}>Sign Up</button
		>

		<button
			class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
			on:click={signIn}>Login</button
		>

		{#if error}
			Error: {error}
		{/if}
	</form>
</div>

<style lang="scss">
</style>
