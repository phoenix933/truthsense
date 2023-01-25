<script lang="ts">
	console.log("Hello from popup");
</script>

what
<h1>
	<img src="/icons/gear.svg" alt="Settings icon" /> TruthSense настройки
</h1>

Run on Facebook:

<label class="toggle">
	<input class="toggle-checkbox" type="checkbox" checked />
	<div class="toggle-switch" />
	<span class="toggle-label">Bluetooth</span>
</label>

<button>click</button>

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

	.toggle {
		cursor: pointer;
		display: inline-block;
	}

	.toggle-switch {
		display: inline-block;
		background: #ccc;
		border-radius: 16px;
		width: 58px;
		height: 32px;
		position: relative;
		vertical-align: middle;
		transition: background 0.25s;
	}
	.toggle-switch:before,
	.toggle-switch:after {
		content: "";
	}
	.toggle-switch:before {
		display: block;
		background: linear-gradient(to bottom, #fff 0%, #eee 100%);
		border-radius: 50%;
		width: 24px;
		height: 24px;
		position: absolute;
		top: 4px;
		left: 4px;
		transition: left 0.25s;
	}
	.toggle:hover .toggle-switch:before {
		background: linear-gradient(to bottom, #fff 0%, #fff 100%);
	}
	.toggle-checkbox:checked + .toggle-switch {
		background: #56c080;
	}
	.toggle-checkbox:checked + .toggle-switch:before {
		left: 30px;
	}

	.toggle-checkbox {
		position: absolute;
		visibility: hidden;
	}

	.toggle-label {
		margin-left: 5px;
		position: relative;
		top: 2px;
	}
</style>
