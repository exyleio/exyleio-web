import { sveltekit } from "@sveltejs/kit/vite"
import type { UserConfig } from "vite"

const config: UserConfig = {
	plugins: [sveltekit()],

	// usually set to undefined. Only set to development by prod.Dockerfile
	mode: process.env.APP_ENV,
}

export default config
