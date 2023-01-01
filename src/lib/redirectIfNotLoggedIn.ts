import { get } from "svelte/store"

import { browser } from "$app/environment"
import { goto } from "$app/navigation"

import { session } from "./stores/session"

export default async (url: string) => {
	setTimeout(() => {
		if (browser && get(session) === null) goto(url)
	}, 750)
}
