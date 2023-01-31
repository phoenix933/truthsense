<script lang="ts">
	import SocialMedia from "$components/root/SocialMedia.svelte";
	import { runOnTwitter } from "$stores";

	const CARD_DETAIL_SELECTOR = "[data-testid='card.wrapper'] a.r-18u37iz";
	const WEBSITE_SELECTOR = "div > div";

	function domUpdaterFunction(
		callback: (
			parent: HTMLElement,
			url: string,
			disableBackgroundScroll: boolean,
		) => void,
	) {
		const cardDetailElements = [
			...(document.querySelectorAll(CARD_DETAIL_SELECTOR) as any),
		];

		cardDetailElements.forEach((cardDetailElement: HTMLAnchorElement) => {
			// Use this instead of the anchor tag element to prevent unnecessary link clicks.
			const cardDetailParentElement =
				cardDetailElement.parentElement as HTMLDivElement;

			const websiteElement = cardDetailElement.querySelector(WEBSITE_SELECTOR);
			const url = websiteElement?.textContent ?? "";

			callback?.(cardDetailParentElement, url, false);
		});
	}
</script>

<SocialMedia {domUpdaterFunction} enabled={$runOnTwitter} />
