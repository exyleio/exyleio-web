import type { FirebaseApp } from "firebase/app"

import { readable } from "svelte/store"
import { browser } from "$app/environment"
import { firebaseConfig } from "$lib/constants"

/**
 * load the firebase app on demand by putting it in a store.
 * this can then be used in derived stores for auth and other services
 */
function createApp() {
	let app: FirebaseApp

	const { subscribe } = readable<FirebaseApp>(undefined, (set) => {
		async function init() {
			if (!app) {
				const { initializeApp } = await import("firebase/app")

				app = initializeApp(firebaseConfig)
			}
			set(app)
		}

		if (browser) init()
	})

	return { subscribe }
}

export const app = createApp()
