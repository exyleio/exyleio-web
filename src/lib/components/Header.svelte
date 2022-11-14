<script>
	import { page } from "$app/stores"
</script>

<header>
	<nav>
		<h1 class="text-5xl font-bold">web.exyle.io</h1>
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
</header>

<style lang="scss">
	header {
		/* layout */
		@apply flex flex-row w-screen justify-center;

		/* style */
		@apply bg-zinc-200;

		nav {
			/* layout */
			@apply flex justify-between items-center p-2;

			/* size */
			@apply w-full max-w-screen-xl;

			h1 {
				@apply inline;
			}

			li {
				@apply inline px-2;

				a {
					@apply text-lg text-blue-500 hover:text-blue-800 visited:text-blue-500;
				}
			}
		}
	}
</style>
