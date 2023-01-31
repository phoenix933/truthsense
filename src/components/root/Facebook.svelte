<script lang="ts">
	import RatingBar from "$components/RatingBar.svelte";
	import type { WebsitesMap } from "$types";
	import { getWebsites } from "$lib/api";
	import { ratingBarExists } from "$lib/dom";
	import { runOnFacebook } from "$stores";
	import { onMount, onDestroy } from "svelte";

	const CARD_SELECTOR = "div[role=article] div[aria-hidden].x6ikm8r.x10wlt62";
	const WEBSITE_SELECTOR = "span.x676frb > span.xlyipyv.xuxw1ft";

	const mountedElements: { parent: HTMLElement; component: RatingBar }[] = [];
	let allWebsites: WebsitesMap;

	function listener() {
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

					const component = new RatingBar({
						target: newElement,
						props: {
							website: thisWebsite,
						},
					});

					websiteParentElement.appendChild(newElement);

					mountedElements.push({ parent: newElement, component });
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

	function enable() {
		window.addEventListener("scroll", listener);

		listener();
	}

	function disable() {
		window.removeEventListener("scroll", listener);

		mountedElements.forEach(({ parent, component }) => {
			component.$destroy();
			parent.parentElement?.removeChild(parent);
		});
	}

	function onFacebookUsedChange(used: boolean) {
		if (used) {
			enable();
		} else {
			disable();
		}
	}

	onMount(() => {
		fetchWebsites();
	});

	onDestroy(() => {
		disable();
	});

	$: onFacebookUsedChange($runOnFacebook);
</script>
