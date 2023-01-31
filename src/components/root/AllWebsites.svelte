<script lang="ts">
	import StickyRatingBar from "$components/StickyRatingBar.svelte";
	import type { WebsitesMap } from "$types";
	import { getWebsites } from "$lib/api";
	import { onMount } from "svelte";
	import { runOnMediaWebsites } from "$stores";

	let allWebsites: WebsitesMap;

	async function fetchWebsites() {
		try {
			allWebsites = await getWebsites();
		} catch (e) {
			// TODO
		}
	}

	onMount(() => {
		fetchWebsites();
	});

	$: website = allWebsites?.[location.hostname];
</script>

{#if $runOnMediaWebsites && website}
	<StickyRatingBar {website} />
{/if}
