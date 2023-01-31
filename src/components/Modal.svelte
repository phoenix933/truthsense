<script lang="ts">
	import IconButton from "$components/IconButton.svelte";
	import Xmark from "$icons/Xmark.svelte";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");

	let dialog: HTMLDialogElement;

	onMount(() => {
		dialog.showModal();
	});

	onDestroy(() => {
		dialog.close();
	});
</script>

<dialog bind:this={dialog}>
	<IconButton --size="34px" on:click={close}>
		<Xmark />
	</IconButton>

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

		background: var(--main-background-color);
		color: var(--main-text-color);
		padding: 3rem 2.5rem;

		:global(button) {
			position: absolute;
			top: 18px;
			right: 18px;
		}

		&::backdrop {
			backdrop-filter: blur(3px);
			background-color: rgba(0, 0, 0, 0.35);
		}
	}
</style>
