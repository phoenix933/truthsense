export function setValue(key: string, value: any) {
	chrome.storage.local.set({ [key]: value });
}

export function getValue(key: string) {
	return chrome.storage.local.get([key]).then((result: any) => result?.[key]);
}
