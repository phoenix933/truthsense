export const exists = (selector: string, element: Document | Element = document) => !!element.querySelector(selector);

export function createElement(html: string) {
	const doc = new DOMParser().parseFromString(html, "text/html");

	return doc.body.firstElementChild as Element;
}
