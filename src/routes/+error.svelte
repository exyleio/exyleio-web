<script>
	import { page } from "$app/stores"
	import { Heading, P } from "flowbite-svelte"
</script>

{#if $page.error}
	<div>
		<Heading tag="h2">Error {$page.status}</Heading>
		<Heading tag="h1">{$page.error.message}</Heading>
	</div>
{:else}
	<P>LMAO how are you here? Go tell POMP.</P>
{/if}
