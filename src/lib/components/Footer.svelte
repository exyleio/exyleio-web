<script lang="ts">
	import { Footer, FooterLink, FooterLinkGroup } from "flowbite-svelte"
	import { DOCS_URL } from "$lib/constants"
</script>

<Footer footerType="sitemap" class="flex justify-center w-full">
	<div class="footer-container">
		<div>
			<h2>Media</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="https://youtube.com/@exyleio">YouTube</FooterLink>
				<FooterLink liClass="mb-4" href="https://discord.gg/synPSeuNFK">
					Community Discord Server
				</FooterLink>
			</FooterLinkGroup>
		</div>

		<div>
			<h2>Resource</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="https://exyleio-docs.web.app">Documentation</FooterLink>
				<FooterLink liClass="mb-4" href="https://github.com/exyleio">Source Code</FooterLink>
			</FooterLinkGroup>
		</div>

		<div>
			<h2>Legal</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="{DOCS_URL}/tos">Terms of Service</FooterLink>
				<FooterLink liClass="mb-4" href="{DOCS_URL}/eula">End User License Agreement</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
</Footer>

<style lang="scss">
	h2 {
		@apply mb-6 text-sm font-semibold text-gray-400 uppercase;
	}

	.footer-container {
		/* layout */
		@apply grid grid-cols-2 md:grid-cols-3;

		/* spacing */
		@apply gap-8 py-8 px-6;

		/* size */
		@apply max-w-screen-xl;
	}
</style>
