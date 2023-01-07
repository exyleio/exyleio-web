/**
 * Everything API related
 */

import { API_URL } from "./constants"
import type { Player } from "./types"

export default {
	/**
	 * Gets a profile of a user.
	 *
	 * @param uid - The firebase uid of a user
	 */
	async getProfile(uid: string): Promise<Player> {
		const response = await fetch(`${API_URL}/players/${uid}`)

		return await response.json()
	},
}
