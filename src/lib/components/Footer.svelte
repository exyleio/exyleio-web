<script lang="ts">
	import Icon from "@iconify/svelte"
	import githubIcon from "@iconify-icons/fa6-brands/github"
</script>

<footer>
	<div class="footer-container">
		<div>Created by <b>Exyle.io</b></div>
		<!-- open GitHub organization page in new tab -->
		<a href="https://github.com/exyleio" target="_blank" rel="noreferrer">
			<Icon icon={githubIcon} height="2rem" />
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		/* layout */
		@apply flex items-center justify-center;

		/* size */
		@apply h-24;

		/* color */
		@apply bg-zinc-300;

		.footer-container {
			/* layout */
			@apply flex justify-between text-center my-0 mx-4;

			/* size */
			@apply w-full max-w-screen-xl;

			/* color */
			@apply text-zinc-600;
		}
	}
</style>
