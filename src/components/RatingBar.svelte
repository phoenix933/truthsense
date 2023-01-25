<script lang="ts">
	import type { Website } from "$types";

	export let website: Website;
</script>

<!-- Do NOT delete data attribute. It's used in ratingBarExists() function. -->
<div class="rating-bar" data-rating-bar="true">
	<img src="/favicon.ico" alt="icon" />

	<span>
		{website.name}:
	</span>

	<div class="progress-bar">
		<div class="progress" style:width={`${website.rating}%`} />
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
				background: red;
				height: 100%;
				border-radius: 6px;
			}
		}

		.rating {
			font-size: 11px;
		}
	}
</style>
