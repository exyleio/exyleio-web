/**
 * Authentication error codes
 */
export type AuthCode =
	// custom codes
	| "" // no error
	| "user-object-is-null"

	// https://firebase.google.com/docs/auth/admin/errors
	| "auth/claims-too-large"
	| "auth/email-already-exists"
	| "auth/id-token-expired"
	| "auth/id-token-revoked"
	| "auth/insufficient-permission"
	| "auth/internal-error"
	| "auth/invalid-argument"
	| "auth/invalid-claims"
	| "auth/invalid-continue-uri"
	| "auth/invalid-creation-time"
	| "auth/invalid-credential"
	| "auth/invalid-disabled-field"
	| "auth/invalid-display-name"
	| "auth/invalid-dynamic-link-domain"
	| "auth/invalid-email"
	| "auth/invalid-email-verified"
	| "auth/invalid-hash-algorithm"
	| "auth/invalid-hash-block-size"
	| "auth/invalid-hash-derived-key-length"
	| "auth/invalid-hash-key"
	| "auth/invalid-hash-memory-cost"
	| "auth/invalid-hash-parallelization"
	| "auth/invalid-hash-rounds"
	| "auth/invalid-hash-salt-separator"
	| "auth/invalid-id-token"
	| "auth/invalid-last-sign-in-time"
	| "auth/invalid-page-token"
	| "auth/invalid-password"
	| "auth/invalid-password-hash"
	| "auth/invalid-password-salt"
	| "auth/invalid-phone-number"
	| "auth/invalid-photo-url"
	| "auth/invalid-provider-data"
	| "auth/invalid-provider-id"
	| "auth/invalid-oauth-responsetype"
	| "auth/invalid-session-cookie-duration"
	| "auth/invalid-uid"
	| "auth/invalid-user-import"
	| "auth/maximum-user-count-exceeded"
	| "auth/missing-android-pkg-name"
	| "auth/missing-continue-uri"
	| "auth/missing-hash-algorithm"
	| "auth/missing-ios-bundle-id"
	| "auth/missing-uid"
	| "auth/missing-oauth-client-secret"
	| "auth/operation-not-allowed"
	| "auth/phone-number-already-exists"
	| "auth/project-not-found"
	| "auth/reserved-claims"
	| "auth/session-cookie-expired"
	| "auth/session-cookie-revoked"
	| "auth/uid-already-exists"
	| "auth/unauthorized-continue-uri"
	| "auth/user-not-found"

	// undocumented
	| "auth/missing-email"
	| "auth/wrong-password"
	| "auth/email-already-in-use"
	| "auth/network-request-failed"
	| "auth/weak-password"

export interface Player {
	id: string
	username: string
	tags: Tag[]
}

type Tag = "Supporter" | "Moderator" | "POMP" | "Contributor" | "ClanLeader" | "ClanCoLeader"
