<script lang="ts">
	import { Heading, Card } from "flowbite-svelte"

	import { TITLE_PREFIX } from "$lib/constants"

	import Danger from "./danger.svelte"
	import Profile from "./profile.svelte"
	import { onMount } from "svelte"
	import redirectIfNotLoggedIn from "$lib/redirectIfNotLoggedIn"

	onMount(async () => {
		// if user is not logged in, redirect them to login page
		redirectIfNotLoggedIn("/login")
	})
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Settings</title>
</svelte:head>

<div class="settings">
	<Card size="xl" class="flex gap-10">
		<Heading tag="h1" class="mb-4">Settings</Heading>

		<Profile />
		<Danger />
	</Card>
</div>

<style lang="scss">
	.settings {
		/* layout */
		@apply flex flex-col;

		/* size */
		@apply h-full;

		/* spacing */
		@apply p-8;
	}
</style>
