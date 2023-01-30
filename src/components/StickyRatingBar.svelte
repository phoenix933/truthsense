<script lang="ts">
	import RatingBar from "./RatingBar.svelte";
	import type { Website } from "$types";
	import { getStickyElements } from "$lib/dom";
	import { onDestroy, onMount } from "svelte";

	export let website: Website;

	const HEIGHT = "40px";

	let stickyElements: HTMLElement[];

	function setStickyTopPosition(top: string) {
		document.body.style.paddingTop = top;
		stickyElements.forEach((el: HTMLElement) => (el.style.top = top));
	}

	onMount(() => {
		stickyElements = getStickyElements();

		setStickyTopPosition(HEIGHT);
	});

	onDestroy(() => {
		setStickyTopPosition("0px");
	});
</script>

<!-- Do NOT delete data attribute. It's used in stickyBarExists() function. -->
<div id="sticky-bar" data-sticky-rating-bar="true">
	<RatingBar {website} />
</div>

<style lang="scss">
	#sticky-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2147483644;

		padding: 0;

		box-shadow: 0px 2px 12px 4px rgb(0 0 0 / 75%);
	}

	#sticky-bar > :global(.rating-bar) {
		height: 40px;
		padding: 0;
		justify-content: center;
	}
</style>
