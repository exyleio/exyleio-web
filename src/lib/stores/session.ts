import type { User } from "firebase/auth"
import type { Readable } from "svelte/store"
import { derived, writable } from "svelte/store"

import { browser } from "$app/environment"
import { page } from "$app/stores"
import { auth } from "$lib/stores/auth"

// dedupe updates so our store only notifies when changes happen
function dedupe<T>(store: Readable<T>): Readable<T> {
	let previous: T

	return derived(store, ($value, set) => {
		if ($value !== previous) {
			previous = $value
			set($value)
		}
	})
}

// allows us to override the page data session
// without having to invalidate LayoutData
const internal = writable<User | null>()

// derived store from page data to provide our session
const external = dedupe(
	derived(
		page,
		// use null if page session is undefined
		($page) => $page.data.session || null
	)
)

export const session: Readable<User | null> = derived(
	[internal, external],
	([$internal, $external]) => $internal || $external
)

/**
 * if we're using session, we need to keep the server-side auth-state in sync with the client
 * this subscribes to the firebase client-side auth state and posts changes back to the server
 * to populate a firebase server-side cookie to mirror it
 */
async function syncSession() {
	if (!browser) return

	// using onIdTokenChanged instead of onAuthStateChanged to keep tokens refreshed
	const { onIdTokenChanged } = await import("firebase/auth")

	auth.subscribe(($auth) => {
		if ($auth) {
			onIdTokenChanged($auth, async (user) => {
				internal.set(user)
			})
		}
	})
}

syncSession()
