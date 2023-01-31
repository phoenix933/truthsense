<script lang="ts">
	import SocialMedia from "$components/root/SocialMedia.svelte";
	import { runOnFacebook } from "$stores";

	const CARD_SELECTOR = "div[role=article] div[aria-hidden].x6ikm8r.x10wlt62";
	const WEBSITE_SELECTOR = "span.x676frb > span.xlyipyv.xuxw1ft";

	function domUpdaterFunction(callback: (parent: HTMLElement, url: string) => void) {
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

				callback?.(websiteParentElement, url);
			}
		});
	}
</script>

<SocialMedia {domUpdaterFunction} enabled={$runOnFacebook} />
