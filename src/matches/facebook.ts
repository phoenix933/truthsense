import "$styles/shared.scss";

import { createPostElement, postElementExists } from "$lib/elements";
import { getWebsites } from "$lib/api";
import { WebsitesMap } from "$types";

const CARD_SELECTOR = "div[role=article] div[aria-hidden].x6ikm8r.x10wlt62";
const WEBSITE_SELECTOR = "span.x676frb > span.xlyipyv.xuxw1ft";

let allWebsites: WebsitesMap;

function onScroll() {
	const cardElements = [...(document.querySelectorAll(CARD_SELECTOR) as any)]
		// Make sure to select only visible cards
		.filter((el) => el.clientHeight);

	const websiteElements = cardElements.map((el) => el.querySelector(WEBSITE_SELECTOR));

	websiteElements.forEach((websiteElement) => {
		if (websiteElement) {
			const url = websiteElement.textContent;

			const websiteParentElement = websiteElement.closest("a")?.parentElement;
			const elementExists = postElementExists(websiteParentElement);

			const thisWebsite = allWebsites?.[url];

			if (!elementExists && thisWebsite) {
				const newElement = createPostElement(thisWebsite);

				websiteParentElement.appendChild(newElement);
			}
		}
	});
}

async function fetchWebsites() {
	try {
		allWebsites = await getWebsites();
	} catch (e) {
		// TODO
	}
}

async function onLoad() {
	fetchWebsites();

	document.addEventListener("scroll", onScroll);
}

// *** ON LOAD ***
onLoad();
