<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let checked: boolean;

	const dispatch = createEventDispatcher();
	const change = (checked: boolean) => dispatch("change", checked);

	function toggle() {
		checked = !checked;

		change(checked);
	}
</script>

<button class="toggle" on:click={toggle}>
	<span class="label">
		<slot />
	</span>

	<div class="switch" class:checked />
</button>

<style lang="scss">
	.toggle {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;

		background: none;
		border: none;
		padding: 0;

		margin: 6px 0;

		.label {
			color: white;
			text-align: left;
		}

		.switch {
			$height: 20px;
			$width: 48px;
			$padding: 4px;

			flex: auto 0 0;

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
