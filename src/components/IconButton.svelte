<button type="button" on:click>
	<slot />
</button>

<style lang="scss">
	button {
		height: var(--size, 20px);
		width: var(--size, 20px);

		padding: 0;
		border: none;
		background-color: transparent;

		margin: var(--margin, 0);

		color: var(--color, var(--main-text-color));
		cursor: pointer;

		transition: all 0.1s ease-in-out;

		&:hover {
			filter: brightness(0.8);
		}
	}
</style>
