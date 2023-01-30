<script lang="ts">
	import Check from "$components/icons/Check.svelte";
	import DetailsModal from "$components/DetailsModal.svelte";
	import EmptyCheck from "./icons/EmptyCheck.svelte";
	import Exclamation from "./icons/Exclamation.svelte";
	import Radiation from "./icons/Radiation.svelte";
	import { RatingLevel } from "$types/RatingLevel";
	import type { Website } from "$types";
	import Xmark from "./icons/Xmark.svelte";
	import { calculateRating, getNumberOfPassedCriteria, getRatingLevel } from "$lib/rating";
	import Info from "./icons/Info.svelte";

	export let website: Website;

	const icons = {
		[RatingLevel.HighCredibility]: Check,
		[RatingLevel.GenerallyCredible]: EmptyCheck,
		[RatingLevel.SomewhatCredible]: Exclamation,
		[RatingLevel.LowCredibility]: Xmark,
		[RatingLevel.NotCredible]: Radiation,
	};

	let showModal = false;

	$: rating = calculateRating(website.criteria);
	$: level = getRatingLevel(rating);

	$: passedCriteria = getNumberOfPassedCriteria(website.criteria);
	$: totalCriteria = website.criteria.length;
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
		<div class="progress" style:width={`${rating}%`} />
	</div>

	<span class="rating">
		{rating}% ({passedCriteria}/{totalCriteria})
	</span>

	<button type="button" class="info" on:click={() => (showModal = true)}>
		<Info />
	</button>
</div>

{#if showModal}
	<DetailsModal {website} on:close={() => (showModal = false)} />
{/if}

<style lang="scss">
	.rating-bar {
		display: flex;
		align-items: center;

		padding: 12px 16px;

		font-size: 13px;
		color: #ededed;
		background: rgb(38, 38, 38);

		img {
			height: 20px;
			max-width: 20px;
			margin-right: 6px;
		}

		.icon {
			display: flex;
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

		button {
			height: 20px;
			width: 20px;
			padding: 0;
			border: none;
			background-color: transparent;
			color: white;

			cursor: pointer;

			margin-left: 8px;
		}
	}
</style>
