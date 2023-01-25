const exists = (selector: string, element: Document | Element = document) =>
	!!element.querySelector(selector);

export const stickyBarExists = () => exists("[data-sticky-rating-bar]");
export const ratingBarExists = (parent: Element) => exists("[data-rating-bar]", parent);
