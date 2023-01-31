<script lang="ts">
	import type { ExtendedEvent } from "$types/ExtendedEvent";
	import IconButton from "$components/IconButton.svelte";
	import Xmark from "$icons/Xmark.svelte";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	// Disabling the background scroll breaks the layout on Twitter.
	export let disableBackgroundScroll = true;

	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");

	let dialog: HTMLDialogElement;

	const toggleBodyScrollable = () => document.body.classList.toggle("no-scroll");

	function handleClick(event: ExtendedEvent<MouseEvent, HTMLDialogElement | any>) {
		const rect = event.target?.getBoundingClientRect();

		const isBackdropClick =
			rect.left > event.clientX ||
			rect.right < event.clientX ||
			rect.top > event.clientY ||
			rect.bottom < event.clientY;

		if (isBackdropClick) {
			close();
		}
	}

	onMount(() => {
		if (disableBackgroundScroll) {
			toggleBodyScrollable();
		}

		dialog.showModal();
	});

	onDestroy(() => {
		if (disableBackgroundScroll) {
			toggleBodyScrollable();
		}

		dialog.close();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:click={handleClick}>
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
