<script lang="ts">
	import type { Website } from "$types";

	export let website: Website;

	function getRatingLevel(rating: number) {
		if (rating === 100) {
			return 100;
		} else if (rating >= 80 && rating < 100) {
			return 80;
		} else if (rating >= 60 && rating < 80) {
			return 60;
		} else if (rating >= 40 && rating < 60) {
			return 40;
		} else {
			return 0;
		}
	}
</script>

<!-- Do NOT delete data attribute. It's used in ratingBarExists() function. -->
<div class="rating-bar" data-rating-bar="true">
	<img src="/favicon.ico" alt="icon" />

	<span>
		{website.name}:
	</span>

	<div class="progress-bar">
		<div
			class="progress rating-{getRatingLevel(website.rating)}"
			style:width={`${website.rating}%`}
		/>
	</div>

	<span class="rating">
		{website.rating}%
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

				&.rating-100 {
					background: #8cd473;
				}

				&.rating-80 {
					background: #5fad64;
				}

				&.rating-60 {
					background: #f8d66d;
				}

				&.rating-40 {
					background: #ff8e4c;
				}

				&.rating-0 {
					background: #ff4e45;
				}
			}
		}

		.rating {
			font-size: 11px;
		}
	}
</style>
