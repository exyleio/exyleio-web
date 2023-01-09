/**
 * Converts UNIX timestamp (milliseconds) to "MM YYYY" format
 */
export default (unix_ms_timestamp: number): string => {
	const date = new Date(unix_ms_timestamp)
	return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}
