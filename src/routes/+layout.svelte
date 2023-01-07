<script>
	import "./styles.scss"
	import { SvelteToast } from "@zerodevx/svelte-toast"

	import Footer from "$lib/components/Footer.svelte"
	import Header from "$lib/components/Header.svelte"

	const toastOptions = {
		// disable toast expiration
		initial: 0,
	}
</script>

<SvelteToast options={toastOptions} />

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		/* size */
		@apply h-full w-full max-w-screen-lg;

		/* layout */
		@apply flex items-center justify-center flex-col;
	}
</style>
