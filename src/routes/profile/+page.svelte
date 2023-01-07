<script lang="ts">
	import type { Player } from "$lib/types"

	import { TITLE_PREFIX } from "$lib/constants"

	import redirectIfNotLoggedIn from "$lib/redirectIfNotLoggedIn"
	import { session } from "$lib/stores/session"
	import api from "$lib/api"

	import { Heading, Card, TestimonialPlaceholder } from "flowbite-svelte"
	import { onMount } from "svelte"

	let profile: Player | undefined

	onMount(async () => {
		// if user is not logged in, redirect them to login page
		redirectIfNotLoggedIn("/login")

		session.subscribe(async (user) => {
			if (user) profile = await api.getProfile(user.uid)
		})
	})
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Profile</title>
</svelte:head>

<Card size="xl" class="flex gap-10 my-10 w-full">
	{#if profile}
		<Heading tag="h2">{profile?.username}</Heading>

		id: {profile?.id}<br />
		tags: {profile?.tags}<br />
		rp:<br />
		rank:<br />
		peak rank:<br />
	{:else}
		<TestimonialPlaceholder />
	{/if}
</Card>
