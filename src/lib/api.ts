import type { WebsitesMap } from "$types";

const API_URL = "https://svelte-latest.web.app/ratings.json";

export async function getWebsites() {
	const res = await fetch(API_URL);

	if (!res.ok) {
		console.log("Couldn't fetch extension data");
	}

	const websitesMap = await res.json();

	return websitesMap as WebsitesMap;
}
