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
</div>

<style lang="scss">
	h1 {
		display: flex;
		align-items: center;
		margin: 0;
		font-size: 18px;

		img {
			height: 16px;
			margin-right: 8px;
			color: white;
		}
	}

	//

	
</style>
