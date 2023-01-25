import "$styles/shared.scss";
import "$styles/all.scss";

import { getWebsites } from "$lib/api";
import { listenForBodyChanges } from "$lib/observer";
import { Website, WebsitesMap } from "$types";
import { createStatusBar, statusBarExists, makeSpaceForStatusBar } from "$lib/elements";

let allWebsites: WebsitesMap;
let stopListeningForBodyChanges: () => void;

function updateUi(website: Website) {
	const statusBarElement = createStatusBar(website);

	document.body.appendChild(statusBarElement);
	makeSpaceForStatusBar();
}

function updateUiIfNeeded() {
	const thisWebsite = allWebsites?.[location.hostname];

	if (!statusBarExists() && thisWebsite) {
		updateUi(thisWebsite);
	}

	const websitesFetched = !!allWebsites;

	if (websitesFetched) {
		stopListeningForBodyChanges();
	}
}

async function fetchWebsites() {
	try {
		allWebsites = await getWebsites();
		updateUiIfNeeded();
	} catch (e) {
		// TODO
	}
}

function onLoad() {
	stopListeningForBodyChanges = listenForBodyChanges(updateUiIfNeeded);

	fetchWebsites();
}

// *** ON LOAD ***
onLoad();
