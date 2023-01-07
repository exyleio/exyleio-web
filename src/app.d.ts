import type { User } from "firebase/auth"

//  https://kit.svelte.dev/docs/types#app
declare namespace App {
	interface PageData {
		// making user a property of session in case it needs to contain
		// some other data. This makes it possible, for instance, to have
		// the user preferences set even if they're not authenticated.
		session: User
	}
}
