<script lang="ts">
	import Toggle from "$components/Toggle.svelte";
	import type { Writable } from "svelte/store";
	import { facebookUsed, twitterUsed, websitesUsed } from "$stores";

	const toggle = (store: Writable<boolean>, value: boolean) => store.set(value);
</script>

<div class="popup">
	<h1>
		<img src="/icons/gear.svg" alt="Settings icon" /> TruthSense настройки
	</h1>

	<Toggle checked={$facebookUsed} on:change={({ detail }) => toggle(facebookUsed, detail)}>
		Включи във Facebook
	</Toggle>

	<Toggle checked={$twitterUsed} on:change={({ detail }) => toggle(twitterUsed, detail)}>
		Включи в Twitter
	</Toggle>

	<Toggle checked={$websitesUsed} on:change={({ detail }) => toggle(websitesUsed, detail)}>
		Включи в медийни уебсайтове
	</Toggle>
</div>

<style lang="scss">
	h1 {
		display: flex;
		align-items: center;
		margin: 0 0 16px;
		font-size: 18px;
		font-weight: 400;

		img {
			height: 16px;
			margin-right: 8px;
			color: white;
		}
	}
</style>
