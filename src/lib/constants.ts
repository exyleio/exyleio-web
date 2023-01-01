// Not using .env (https://kit.svelte.dev/docs/modules#$env-static-public) because:
// - performance is identical (rendered html is the same)
// - .env requires `PUBLIC_` prefix

export const DOCS_URL = "https://exyleio-docs.web.app"

export const TITLE_PREFIX = "Exyle.io | "

export const firebaseConfig = {
	apiKey: "AIzaSyD4BB2Ewtbp-yEWZcneCbXXFu3__HMZLCw",
	authDomain: "exyleio.firebaseapp.com",
	projectId: "exyleio",
	storageBucket: "exyleio.appspot.com",
	messagingSenderId: "727700407174",
	appId: "1:727700407174:web:dfd3d3697840f401d92207",
	measurementId: "G-3QHFSTJVXE",
}
