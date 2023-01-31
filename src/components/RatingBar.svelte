<script lang="ts">
	import Check from "$icons/Check.svelte";
	import DetailsModal from "$components/DetailsModal.svelte";
	import EmptyCheck from "$icons/EmptyCheck.svelte";
	import Exclamation from "$icons/Exclamation.svelte";
	import IconButton from "$components/IconButton.svelte";
	import Info from "$icons/Info.svelte";
	import Radiation from "$icons/Radiation.svelte";
	import { RatingLevel } from "$types/RatingLevel";
	import type { Website } from "$types";
	import Xmark from "$icons/Xmark.svelte";
	import { calculateRating, getNumberOfPassedCriteria, getRatingLevel } from "$lib/rating";

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
		<IconButton --size="16px" on:click={() => (showModal = true)}>
			<svelte:component this={icons[level]} />
		</IconButton>
	</span>

	<div class="progress-bar">
		<div class="progress" style:width={`${rating}%`} />
	</div>

	<span class="rating">
		{rating}% ({passedCriteria}/{totalCriteria})
	</span>

	<IconButton --color="var(--main-text-color)" --margin="0 8px" on:click={() => (showModal = true)}>
		<Info />
	</IconButton>
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
		color: var(--main-text-color);
		background: var(--main-background-color);

		img {
			height: 20px;
			max-width: 20px;
			margin-right: 6px;
		}

		.icon {
			display: flex;
			color: var(--color);
			margin-left: 8px;

			transition: all 0.25s ease-in-out;

			&:hover {
				transform: rotate(90deg);
			}
		}

		.progress-bar {
			width: 50px;
			height: 4px;
			padding: 1px;
			border-radius: 6px;
			background-color: var(--secondary-text-color);
			margin: 0 4px;

			.progress {
				height: 100%;
				border-radius: 6px;
				background-color: var(--color);
			}
		}

		.rating {
			font-size: 11px;
			color: var(--secondary-text-color);
		}

		&.rating-100 {
			--color: var(--green);
		}

		&.rating-80 {
			--color: var(--dark-green);
		}

		&.rating-60 {
			--color: var(--yellow);
		}

		&.rating-40 {
			--color: var(--orange);
		}

		&.rating-0 {
			--color: var(--red);
		}
	}
</style>
