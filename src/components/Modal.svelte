<script lang="ts">
	import Xmark from "./icons/Xmark.svelte";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");

	let dialog: HTMLDialogElement;

	onMount(() => {
		console.log("ON MOUNT");
		dialog.showModal();
	});

	onDestroy(() => {
		dialog.close();
	});
</script>

<dialog bind:this={dialog}>
	<button type="button" on:click={close}>
		<Xmark />
	</button>

	<slot />
</dialog>

<style lang="scss">
	dialog {
		max-height: 60vh;
		max-width: 540px;
		width: 80%;
		border-radius: 6px;
		border: none;
		box-shadow: 0px 7px 8px 5px rgb(0 0 0 / 50%);

		background: #1c1c1c;
		color: rgb(238 239 233);
		padding: 3rem 2.5rem;

		button {
			height: 34px;
			width: 34px;
			padding: 0;
			background: transparent;
			border: none;

			color: #ededed;
			cursor: pointer;

			position: absolute;
			top: 18px;
			right: 18px;

			transition: all 0.1s ease-in-out;

			&:hover {
				filter: brightness(0.8);
			}
		}

		&::backdrop {
			backdrop-filter: blur(3px);
			background-color: rgba(0, 0, 0, 0.35);
		}
	}
</style>
