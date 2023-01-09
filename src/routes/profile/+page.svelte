<script lang="ts">
	import type { AuthCode, Player } from "$lib/types"

	import { TITLE_PREFIX } from "$lib/constants"
	import { dev } from "$app/environment"

	import redirectIfNotLoggedIn from "$lib/redirectIfNotLoggedIn"
	import formatDateTime from "$lib/util/formatDateTime"
	import { session } from "$lib/stores/session"
	import api from "$lib/api"

	import { Heading, Card, TestimonialPlaceholder, P, Tooltip } from "flowbite-svelte"
	import { onMount } from "svelte"

	let profile: Player | AuthCode | undefined

	onMount(async () => {
		// if user is not logged in, redirect them to login page
		redirectIfNotLoggedIn("/login")

		session.subscribe(async (user) => {
			if (user) {
				profile = await api.getProfile(user.uid)

				if (dev) console.log("profile:", profile)
			}
		})
	})
</script>

<svelte:head>
	<title>{TITLE_PREFIX}Profile</title>
</svelte:head>

<Card size="xl" class="flex my-10 w-full">
	{#if typeof profile === "string"}
		<!-- variable "profile" contains error message now -->
		Error: {profile}
	{:else if profile}
		<Heading tag="h2" class="block mb-10">{profile.username}</Heading>

		<div>
			UID: {profile.uid}
			<br />
			Rank <span id="rank">#X (Peaked at X on DD MM YYYY)</span>
			<br />
			joined <span class="font-semibold text-white">{formatDateTime(profile.created_at)}</span>
			<br />
			RP:
			<br />
			tags: {profile.tags}
		</div>
	{:else}
		<TestimonialPlaceholder />
	{/if}
</Card>
