<script lang="ts">
	import Check from "$components/icons/Check.svelte";
	import EmptyCheck from "./icons/EmptyCheck.svelte";
	import Exclamation from "./icons/Exclamation.svelte";
	import Radiation from "./icons/Radiation.svelte";
	import { RatingLevel } from "$types/RatingLevel";
	import type { Website } from "$types";
	import Xmark from "./icons/Xmark.svelte";
	import { getRatingLevel } from "$lib/rating";

	export let website: Website;

	const icons = {
		[RatingLevel.HighCredibility]: Check,
		[RatingLevel.GenerallyCredible]: EmptyCheck,
		[RatingLevel.SomewhatCredible]: Exclamation,
		[RatingLevel.LowCredibility]: Xmark,
		[RatingLevel.NotCredible]: Radiation,
	};

	$: level = getRatingLevel(website.rating);
</script>

<!-- Do NOT delete data attribute. It's used in ratingBarExists() function. -->
<div class="rating-bar rating-{level}" data-rating-bar="true">
	<img src="/favicon.ico" alt="icon" />

	<span>
		{website.name}
	</span>

	<span class="icon">
		<svelte:component this={icons[level]} />
	</span>

	<div class="progress-bar">
		<div class="progress" style:width={`${website.rating}%`} />
	</div>

	<span class="rating">
		{website.rating}% (6/9)
	</span>
</div>

<style lang="scss">
	.rating-bar {
		display: flex;
		align-items: center;

		padding: 12px 16px;

		font-size: 13px;

		background: rgb(38, 38, 38);
		color: rgb(238 239 233);

		img {
			height: 20px;
			max-width: 20px;
			margin-right: 6px;
		}

		.icon {
			height: 16px;
			color: var(--color);
			margin-left: 8px;

			:global(svg) {
				height: 16px;
			}
		}

		.progress-bar {
			width: 50px;
			height: 4px;
			padding: 1px;
			border-radius: 6px;
			background-color: grey;
			margin: 0 4px;

			.progress {
				height: 100%;
				border-radius: 6px;
				background-color: var(--color);
			}
		}

		.rating {
			font-size: 11px;
			color: #cecece;
		}

		&.rating-100 {
			--color: #8cd473;
		}

		&.rating-80 {
			--color: #5fad64;
		}

		&.rating-60 {
			--color: #f8d66d;
		}

		&.rating-40 {
			--color: #ff8e4c;
		}

		&.rating-0 {
			--color: #ff4e45;
		}
	}
</style>
