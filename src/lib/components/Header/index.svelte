<script>
	import { page } from "$app/stores"

	import { session } from "$lib/stores/session"

	import LoginButton from "$lib/components/Header/LoginButton.svelte"
	import LogOutButton from "$lib/components/Header/LogOutButton.svelte"
</script>

<header>
	<div class="header-container">
		<img alt="Exyle.io Logo" src="favicon.png" />
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === "/ranking" ? "page" : undefined}>
					<a href="/ranking">Ranking</a>
				</li>
			</ul>
		</nav>

		{#if $session}
			<LogOutButton />
		{:else}
			<LoginButton />
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		/* layout */
		@apply flex justify-center;

		/* size */
		@apply h-16 w-full;

		/* style */
		@apply bg-zinc-200;

		.header-container {
			/* size */
			@apply w-full max-w-screen-xl;

			/* layout */
			@apply flex flex-row items-center px-2;

			img {
				@apply h-12 w-12;
			}

			nav {
				@apply w-full;

				li {
					@apply inline px-2;

					a {
						@apply text-lg text-blue-500 hover:text-blue-800 visited:text-blue-500;
					}
				}
			}
		}
	}
</style>
