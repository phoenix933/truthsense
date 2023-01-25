const exists = (selector: string, element: Document | Element = document) =>
	!!element.querySelector(selector);

const STICKY_BAR = "[data-sticky-rating-bar]";

export const stickyBarExists = () => exists(STICKY_BAR);
export const ratingBarExists = (parent: Element) => exists("[data-rating-bar]", parent);

export function getStickyElements() {
	const allElements = [...(document.querySelectorAll(`*:not(${STICKY_BAR})`) as any)];

	const stickyElements = allElements.filter((el: HTMLElement) => {
		const styles = getComputedStyle(el, null);

		return styles?.position === "fixed" && styles?.top === "0px";
	});

	return stickyElements;
}
