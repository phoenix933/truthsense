export function listenForBodyChanges(listener: () => void) {
	const observer = new MutationObserver(listener);

	observer.observe(document.body, {
		subtree: true,
		childList: true,
	});

	return () => observer.disconnect();
}
