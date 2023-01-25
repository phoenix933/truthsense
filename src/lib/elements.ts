import { Website } from "$types/Website";
import {
	BODY_WITH_STATUS_BAR_CLASS_NAME,
	METRIX_ELEMENT_CLASS_NAME,
	METRIX_STATUS_BAR_ID,
} from "$constants";
import { createElement, exists } from "$lib/dom";

function createMetrixElement(website: Website, isStatusBar = false) {
	const metrixElement = createElement(`
    <div class="${METRIX_ELEMENT_CLASS_NAME}" ${isStatusBar ? `id="${METRIX_STATUS_BAR_ID}"` : ""}>
      <img src="/favicon.ico" alt="icon" />
    
      <span>
        ${website.name}:
      </span>

      <div class="progress-bar">
        <div class="progress" style="width: ${website.rating}%;"></div>
      </div>

      <span class="rating">
        ${website.rating}%
      </span>
    </div>
  `);

	return metrixElement;
}

export const createPostElement = (website: Website) => createMetrixElement(website);
export const createStatusBar = (website: Website) => createMetrixElement(website, true);

export const statusBarExists = () => exists(`#${METRIX_STATUS_BAR_ID}`);
export const makeSpaceForStatusBar = () =>
	document.body.classList.add(BODY_WITH_STATUS_BAR_CLASS_NAME);

export const ratingBarExists = (parent: Element) => exists(`[data-rating-bar]`, parent);
