import type { FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"
import { type Readable, derived } from "svelte/store"

import { browser, dev } from "$app/environment"
import { app } from "$lib/stores/app"
import type { AuthCode } from "$lib/types"

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

	return {
		subscribe,
		signUp: async (username: string, email: string, password: string): Promise<AuthCode> => {
			const { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } = await import(
				"firebase/auth"
			)

			try {
				const { user } = await createUserWithEmailAndPassword(auth, email, password)

				await sendEmailVerification(user)
				await updateProfile(user, { displayName: username })
			} catch ({ code }) {
				return code as AuthCode
			}

			return ""
		},
		signIn: async (email: string, password: string, remember: boolean): Promise<AuthCode> => {
			const { signInWithEmailAndPassword } = await import("firebase/auth")

			try {
				// default mode is 'LOCAL'
				if (!remember) auth.setPersistence({ type: "SESSION" })

				await signInWithEmailAndPassword(auth, email, password)
			} catch ({ code }) {
				return code as AuthCode
			}

			return ""
		},
		signOut: async (): Promise<AuthCode> => {
			const { signOut } = await import("firebase/auth")

			try {
				await signOut(auth)
			} catch ({ code }) {
				return code as AuthCode
			}

			return ""
		},
		sendVerificationEmail: async (): Promise<AuthCode> => {
			const { sendEmailVerification } = await import("firebase/auth")

			if (!auth.currentUser) return "user-object-is-null"

			await sendEmailVerification(auth.currentUser)

			return ""
		},
	}
}

export const auth = createAuth()
