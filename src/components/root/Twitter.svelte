<script lang="ts">
	import RatingBar from "$components/RatingBar.svelte";
	import type { WebsitesMap } from "$types";
	import { getWebsites } from "$lib/api";
	import { onMount } from "svelte";
	import { ratingBarExists } from "$lib/dom";

	const CARD_DETAIL_SELECTOR = "[data-testid='card.wrapper'] a.r-18u37iz";
	const WEBSITE_SELECTOR = "div > div";

	let allWebsites: WebsitesMap;

	function onScroll() {
		const cardDetailElements = [
			...(document.querySelectorAll(CARD_DETAIL_SELECTOR) as any),
		];

		cardDetailElements.forEach((cardDetailElement: HTMLAnchorElement) => {
			// Use this instead of the anchor tag element to prevent unnecessary link clicks.
			const cardDetailParentElement =
				cardDetailElement.parentElement as HTMLDivElement;

			const websiteElement = cardDetailElement.querySelector(WEBSITE_SELECTOR);
			const url = websiteElement?.textContent ?? "";

			const elementExists = ratingBarExists(cardDetailParentElement);

			const thisWebsite = allWebsites?.[url];

			if (!elementExists && thisWebsite) {
				const newElement = document.createElement("div");

				new RatingBar({
					target: newElement,
					props: {
						website: thisWebsite,
						disableBackgroundScroll: false,
					},
				});

				cardDetailParentElement.prepend(newElement);
			}
		});
	}

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
</script>

<svelte:window on:scroll={onScroll} />
