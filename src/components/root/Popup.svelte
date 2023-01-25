<script lang="ts">
	import Toggle from "$components/Toggle.svelte";

	let checked = true

	$: console.log(checked)
</script>

<div class="popup">

	<h1>
		<img src="/icons/gear.svg" alt="Settings icon" /> TruthSense настройки
	</h1>

	<Toggle bind:checked>
		Включи във Facebook
	</Toggle>

	<Toggle bind:checked>
		Включи в Twitter
	</Toggle>

	<Toggle bind:checked>
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

	//

	
</style>
