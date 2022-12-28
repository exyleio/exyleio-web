<script>
	import Header from "$lib/components/Header/index.svelte"
	import Footer from "$lib/components/Footer.svelte"

	import "./styles.scss"
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		/* size */
		@apply h-full;

		/* layout */
		@apply flex items-center justify-center flex-col;
	}
</style>
