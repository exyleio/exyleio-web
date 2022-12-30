import type { FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"

import { derived, type Readable } from "svelte/store"
import { browser, dev } from "$app/environment"
import { app } from "$lib/stores/app"

/**
 * load the firebase auth client as a store and provide an API to access its methods
 * this depends on the app store and will also only be loaded on demand
 * so no firebase JS loaded unless the page needs it
 */
const createAuth = () => {
	let auth: Auth

	const { subscribe } = derived<Readable<FirebaseApp>, Auth>(app, ($app, set) => {
		async function init() {
			if ($app && !auth) {
				const { getAuth, connectAuthEmulator } = await import("firebase/auth")

				auth = getAuth($app)

				if (dev) connectAuthEmulator(auth, "http://localhost:9099")

				set(auth)
			}
		}

		if (browser) init()
	})

	/**
	 * @param email - User email address
	 * @param password - User password
	 * @returns  Empty string if sign-in was successful,
	 * [Firebase API authentication error code](https://firebase.google.com/docs/auth/admin/errors) otherwise.
	 */
	async function signUp(email: string, password: string): Promise<string> {
		const { createUserWithEmailAndPassword } = await import("firebase/auth")

		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch ({ code }) {
			return code as string
		}

		return ""
	}

	/**
	 * @param email - User email address
	 * @param password - User password
	 * @returns Empty string if sign-in was successful,
	 * [Firebase API authentication error code](https://firebase.google.com/docs/auth/admin/errors) otherwise.
	 */
	async function signIn(email: string, password: string): Promise<string> {
		const { signInWithEmailAndPassword } = await import("firebase/auth")

		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch ({ code }) {
			return code as string
		}

		return ""
	}

	/**
	 * @returns Empty string if sign-in was successful,
	 * [Firebase API authentication error code](https://firebase.google.com/docs/auth/admin/errors) otherwise.
	 */
	async function signOut() {
		const { signOut } = await import("firebase/auth")

		try {
			await signOut(auth)
		} catch ({ code }) {
			return code as string
		}

		return ""
	}

	return {
		subscribe,
		signUp,
		signIn,
		signOut,
	}
}

export const auth = createAuth()
