<script lang="ts">
	import { auth } from "$lib/stores/auth"
</script>

<button on:click={() => auth.signOut()}>Logout</button>
