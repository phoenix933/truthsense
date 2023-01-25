import { writable } from "svelte/store";

// chrome.storage.local.clear()

function setValue(key: string, value: any) {
	return chrome.storage.local.set({ [key]: value });
}

function getValue(key: string) {
	return chrome.storage.local.get([key]).then((result: any) => result?.[key]);
}

// General persistent store
export function persistent(key: string, defaultValue: any) {
	const { subscribe, set, update } = writable(defaultValue);

	async function initValue() {
		const storedValue = await getValue(key);

		if (typeof storedValue === "undefined") {
			setValue(key, defaultValue);
		} else {
			set(storedValue)
		}
	}

	initValue();

	return {
		subscribe,
		set: (value: any) => {
			set(value);

			setValue(key, value);
		},
		update: (payload: any) =>
			update((store) => {
				const newValue = { ...store, ...payload };

				setValue(key, newValue);

				return newValue;
			}),
	};
}
