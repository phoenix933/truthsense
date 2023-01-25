<script lang="ts">
	export let checked: boolean;
</script>

<button class="toggle" on:click={() => (checked = !checked)}>
	<span class="label">
		<slot />
	</span>

	<div class="switch" class:checked />
</button>

<style lang="scss">
	.toggle {
		$height: 20px;
		$width: 48px;
		$padding: 4px;

		cursor: pointer;
		display: inline-flex;
		align-items: center;

		background: none;
		border: none;
		padding: 0;

		.label {
			margin-right: 16px;
			color: white;
		}

		.switch {
			display: inline-block;
			background: #ccc;
			border-radius: 16px;
			width: $width;
			height: $height;
			position: relative;
			vertical-align: middle;
			transition: background 0.25s;

			&:before,
			&:after {
				content: "";
			}

			&:before {
				$size: calc($height - 2 * $padding);

				display: block;
				background: linear-gradient(to bottom, #fff 0%, #eee 100%);
				border-radius: 50%;
				width: $size;
				height: $size;
				position: absolute;
				top: $padding;
				left: $padding;
				transition: left 0.25s;
			}

			&.checked {
				background: #56c080;

				&:before {
					left: calc($width - $height + $padding);
				}
			}

			&:hover {
				.switch {
					&:before {
						background: linear-gradient(
							to bottom,
							#fff 0%,
							#fff 100%
						);
					}
				}
			}
		}
	}
</style>
