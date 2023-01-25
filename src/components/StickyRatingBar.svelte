<script lang="ts">
	import RatingBar from "./RatingBar.svelte";
	import type { Website } from "$types";

	export let website: Website;
</script>

<!-- Do NOT delete data attribute. It's used in stickyBarExists() function. -->
<div id="sticky-bar" data-sticky-rating-bar="true">
	<RatingBar {website} />
</div>

<style lang="scss">
	$height: 40px;

	#sticky-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2147483644;

		padding: 0;

		box-shadow: 0px 2px 12px 4px rgb(0 0 0 / 75%);
	}

	#sticky-bar > :global(*) {
		height: 40px;
		padding: 0;
		justify-content: center;
	}

	:global(body) {
		padding-top: $height !important;
		transition: padding 0.5s ease-in-out !important;
	}
</style>
