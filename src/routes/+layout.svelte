<script>
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"

	import "./styles.scss"
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	main {
		/* size */
		@apply h-screen w-full;

		/* positioning */
		@apply flex items-center justify-center flex-col;
	}
</style>
