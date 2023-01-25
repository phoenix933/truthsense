<script lang="ts">
	import RatingBar from "$components/RatingBar.svelte";
	import type { WebsitesMap } from "$types";
	import { getWebsites } from "$lib/api";
	import { onMount } from "svelte";
	import { ratingBarExists } from "$lib/dom";

	const CARD_SELECTOR = "div[role=article] div[aria-hidden].x6ikm8r.x10wlt62";
	const WEBSITE_SELECTOR = "span.x676frb > span.xlyipyv.xuxw1ft";

	let allWebsites: WebsitesMap;

	function onScroll() {
		const cardElements = [...(document.querySelectorAll(CARD_SELECTOR) as any)]
			// Make sure to select only visible cards
			.filter((el) => el.clientHeight);

		const websiteElements = cardElements.map((el) =>
			el.querySelector(WEBSITE_SELECTOR),
		);

		websiteElements.forEach((websiteElement) => {
			if (websiteElement) {
				const url = websiteElement.textContent;

				const websiteParentElement =
					websiteElement.closest("a")?.parentElement;
				const elementExists = ratingBarExists(websiteParentElement);

				const thisWebsite = allWebsites?.[url];

				if (!elementExists && thisWebsite) {
					const newElement = document.createElement("div");

					new RatingBar({
						target: newElement,
						props: {
							website: thisWebsite,
						},
					});

					websiteParentElement.appendChild(newElement);
				}
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
