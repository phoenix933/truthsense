<script lang="ts">
	import HeaderRatingBar from "$components/HeaderRatingBar.svelte";
	import { getWebsites } from "$lib/api";
	import { listenForBodyChanges } from "$lib/observer";
	import { statusBarExists } from "$lib/elements";
	import type { Website, WebsitesMap } from "$types";
	import { onMount, onDestroy } from "svelte";

	let allWebsites: WebsitesMap;
	let stopListeningForBodyChanges: () => void;

	function updateUi(website: Website) {
		const statusBarElement = document.createElement("div");

		new HeaderRatingBar({
			target: statusBarElement,
			props: {
				website,
			},
		});

		document.body.appendChild(statusBarElement);
	}

	function updateUiIfNeeded() {
		const thisWebsite = allWebsites?.[location.hostname];

		if (!statusBarExists() && thisWebsite) {
			updateUi(thisWebsite);
		}

		const websitesFetched = !!allWebsites;

		if (websitesFetched) {
			stopListeningForBodyChanges?.();
		}
	}

	async function fetchWebsites() {
		try {
			allWebsites = await getWebsites();
			updateUiIfNeeded();
		} catch (e) {
			// TODO
		}
	}

	onMount(() => {
		stopListeningForBodyChanges = listenForBodyChanges(updateUiIfNeeded);

		fetchWebsites();
	});

	onDestroy(() => {
		stopListeningForBodyChanges?.();
	});
</script>
