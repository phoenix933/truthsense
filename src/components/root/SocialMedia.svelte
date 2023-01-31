<script lang="ts">
	import type { DomUpdaterFunction } from "$types/DomUpdaterFunction";
	import RatingBar from "$components/RatingBar.svelte";
	import type { WebsitesMap } from "$types";
	import { getWebsites } from "$lib/api";
	import { ratingBarExists } from "$lib/dom";
	import { onMount, onDestroy } from "svelte";

	export let domUpdaterFunction: DomUpdaterFunction;
	export let enabled: boolean;

	const mountedElements: { container: HTMLElement; component: RatingBar }[] = [];
	let allWebsites: WebsitesMap;

	function listener() {
		domUpdaterFunction(
			(
				parentElement: HTMLElement,
				url: string,
				disableBackgroundScroll = true,
			) => {
				const elementExists = ratingBarExists(parentElement);
				const thisWebsite = allWebsites?.[url];

				if (!elementExists && thisWebsite) {
					const container = document.createElement("div");

					const component = new RatingBar({
						target: container,
						props: {
							website: thisWebsite,
							disableBackgroundScroll,
						},
					});

					parentElement.appendChild(container);

					mountedElements.push({ container, component });
				}
			},
		);
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

		mountedElements.forEach(({ container, component }) => {
			component.$destroy();
			container.parentElement?.removeChild(container);
		});
	}

	function onEnabledChange(_enabled: boolean) {
		if (_enabled) {
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

	$: onEnabledChange(enabled);
</script>
