<script lang="ts">
	import Check from "$icons/Check.svelte";
	import Xmark from "$icons/Xmark.svelte";
	import Modal from "$components/Modal.svelte";
	import type { Website } from "$types";

	export let website: Website;
	export let disableBackgroundScroll: boolean;

	const CRITERIA_DESCRIPTIONS = [
		"Не публикува невярно съдържание",
		"Събира и представя информация отговорно",
		"Редовно коригира и изяснява грешки в специализирана страница",
		"Отнася се отговорно към разликата между новина и мнение",
		"Не публикува подвеждащи и неточни заглавия",
		"Публично разкрива информация за собствеността и финансирането си в специализирана страница",
		"Ясно и недвусмислено обозначава платеното съдържание",
		"Предоставя името на главния редактор, заедно с информация за контакт и биографична информация",
		"Предоставя имената на авторите, заедно с информация за контакт и биографична информация",
	];
</script>

<Modal {disableBackgroundScroll} on:close>
	<div class="header">
		<img src="/favicon.ico" alt="icon" />

		{website.name}
	</div>

	<div class="main">
		<p>---</p>

		<table>
			<thead>
				<tr>
					<th>Критерий</th>
					<th>Покрит ли е този критерий?</th>
				</tr>
			</thead>

			<tbody>
				{#each website.criteria as criterium, i (i)}
					<tr>
						<td>
							{CRITERIA_DESCRIPTIONS[i]}
						</td>

						<td style:color={criterium ? "var(--green)" : "var(--red)"}>
							{#if criterium}
								<Check />
							{:else}
								<Xmark />
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Modal>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;

		font-size: 1.875rem;

		img {
			height: 40px;
			margin-right: 12px;
		}
	}

	.main {
		p {
			color: var(--secondary-text-color);
			margin-bottom: 1.5rem;
		}
	}

	table {
		--border-color: #3e3e3e;

		width: 100%;
		border-collapse: collapse;
		border-color: var(--border-color);

		font-size: 14px;

		thead {
			background-color: var(--secondary-background-color);
			text-align: left;

			th {
				padding: 1.25rem 1.5rem;
			}
		}

		td {
			border: 1px solid var(--border-color);
			border-left: none;
			padding: 2rem 1.5rem;

			&:last-child {
				border-right: none;
			}

			:global(svg) {
				height: 20px;
			}
		}
	}
</style>
