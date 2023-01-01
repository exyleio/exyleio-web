<script>
	import { Button, Heading, P } from "flowbite-svelte"
</script>

<div>
	<Heading tag="h2" class="mb-4" color="text-red-500">Dander Zone</Heading>

	<P class="mb-3" weight="semibold" color="text-red-500">
		WARNING: This following actions can not be undone. Make sure you understand exactly what it
		means before pressing the button.
	</P>

	<Button id="delete-account" color="red" disabled>Delete Account (not implemented yet)</Button>
</div>
