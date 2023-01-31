<script lang="ts">
	import Gear from "$icons/Gear.svelte";
	import Toggle from "$components/Toggle.svelte";
	import type { Writable } from "svelte/store";
	import { runOnFacebook, runOnTwitter, runOnMediaWebsites } from "$stores";

	const toggle = (store: Writable<boolean>, value: boolean) => store.set(value);
</script>

<div class="popup">
	<h1>
		<Gear /> TruthSense настройки
	</h1>

	<Toggle checked={$runOnFacebook} on:change={({ detail }) => toggle(runOnFacebook, detail)}>
		Включи във Facebook
	</Toggle>

	<Toggle checked={$runOnTwitter} on:change={({ detail }) => toggle(runOnTwitter, detail)}>
		Включи в Twitter
	</Toggle>

	<Toggle checked={$runOnMediaWebsites} on:change={({ detail }) => toggle(runOnMediaWebsites, detail)}>
		Включи в медийни уебсайтове
	</Toggle>
</div>

<style lang="scss">
	h1 {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 0 0 16px;
		font-size: 18px;
		font-weight: 400;
	}
</style>
