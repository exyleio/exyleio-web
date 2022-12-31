import type { User } from "firebase/auth"
import { writable } from "svelte/store"

import { browser } from "$app/environment"
import { auth } from "$lib/stores/auth"

export const session = writable<User | null>(null)

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
				session.set(user)
			})
		}
	})
}

syncSession()
