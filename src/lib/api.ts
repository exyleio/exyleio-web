/**
 * Everything API related
 */

import { API_URL } from "./constants"
import type { AuthCode, Player } from "./types"

export default {
	/**
	 * Gets a profile of a user.
	 *
	 * @param uid - The firebase uid of a user
	 */
	async getProfile(uid: string): Promise<Player | AuthCode> {
		const response = await fetch(`${API_URL}/v1/players/${uid}`)

		if (response.ok) return await response.json()
		else return (await response.json()).detail
	},
}
