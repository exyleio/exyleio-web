<script>
	import { page } from "$app/stores"
	import { auth } from "$lib/stores/auth"
	import { session } from "$lib/stores/session"

	import {
		Avatar,
		Button,
		Dropdown,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
	} from "flowbite-svelte"
</script>

<header>
	<Navbar let:hidden let:toggle navClass="w-full max-w-screen-xl">
		<NavBrand href="/">
			<img alt="Exyle.io Logo" src="favicon.png" />
		</NavBrand>

		<div class="flex md:order-2">
			{#if $session}
				<Button pill color="light" id="user_avatar" class="!p-1 !pr-3">
					<Avatar class="mr-2" />
					<!-- $session.displayName is null right after signing up -->
					{$session.displayName || ""}
				</Button>
				<Dropdown inline triggeredBy="#user_avatar">
					<DropdownItem href="/settings">Account Settings</DropdownItem>

					<DropdownItem
						slot="footer"
						on:click={() => {
							auth.signOut()
						}}>Sign out</DropdownItem
					>
				</Dropdown>
			{:else}
				<Button href="/login">Log In</Button>
			{/if}
			<NavHamburger on:click={toggle} />
		</div>

		<NavUl {hidden}>
			<NavLi href="/" active={$page.url.pathname === "/"}>Home</NavLi>
			<NavLi href="/about" active={$page.url.pathname === "/about"}>About</NavLi>
			<NavLi href="/ranking" active={$page.url.pathname === "/ranking"}>Ranking</NavLi>
		</NavUl>
	</Navbar>
</header>

<style lang="scss">
	header {
		/* layout */
		@apply flex justify-center items-center;

		/* size */
		@apply h-[96px] w-full;

		/* prevent other elements from drawing over it*/
		@apply z-50;

		img {
			@apply h-12 w-12;
		}
	}
</style>
