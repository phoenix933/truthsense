import { writable } from "svelte/store";

function setValue(key: string, value: any) {
	return chrome.storage.local.set({ [key]: value });
}

function getValue(key: string) {
	return chrome.storage.local.get([key]).then((result: any) => result?.[key]);
}

// General persistent store
export function persistent<T>(key: string, defaultValue: any) {
	// Listener
	function listener(params: any) {
		if (params?.[key]) {
			set(params?.[key].newValue);
		}
	}

	// Init value
	async function initValue() {
		const storedValue = await getValue(key);

		if (typeof storedValue === "undefined") {
			setValue(key, defaultValue);
			set(defaultValue);
		} else {
			set(storedValue);
		}
	}

	initValue();

	chrome.storage.local.onChanged.addListener(listener);

	const { subscribe, set, update } = writable<T>(undefined, () => {
		return () => {
			chrome.storage.local.onChanged.removeListener(listener);
		};
	});

	return {
		subscribe,
		set: (value: any) => {
			setValue(key, value);

			return set(value);
		},
		update: (payload: any) =>
			update((store: any) => {
				const newValue = { ...store, ...payload };

				setValue(key, newValue);

				return newValue;
			}),
	};
}
