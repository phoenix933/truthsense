<script lang="ts">
	import Check from "./icons/Check.svelte";
	import Xmark from "./icons/Xmark.svelte";
	import Modal from "./Modal.svelte";
	import type { Website } from "$types";

	export let website: Website;

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

<Modal on:close>
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
					<th>Покрива ли този критерий?</th>
				</tr>
			</thead>

			<tbody>
				{#each website.criteria as criterium, i (i)}
					<tr>
						<td>
							{CRITERIA_DESCRIPTIONS[i]}
						</td>

						<td class="pass" class:check={criterium}>
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

		color: #ededed;
		font-size: 1.875rem;

		img {
			height: 40px;
			margin-right: 12px;
		}
	}

	.main {
		p {
			color: #bbb;
			margin-bottom: 1.5rem;
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
		border-color: #3e3e3e;

		font-size: 14px;

		thead {
			background-color: #232323;
			color: #ededed;
			text-align: left;

			th {
				padding: 1.25rem 1.5rem;
			}
		}

		td {
			border: 1px solid #3e3e3e;
			border-left: none;
			padding: 2rem 1.5rem;

			&.pass {
				color: #fe716a;

				&.check {
					color: #8cd473;
				}
			}

			&:last-child {
				border-right: none;
			}

			:global(svg) {
				height: 20px;
			}
		}
	}
</style>
