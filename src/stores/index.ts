import { persistent } from "$lib/storage";

export const runOnFacebook = persistent<boolean>("runOnFacebook", true);
export const runOnTwitter = persistent<boolean>("runOnTwitter", true);
export const runOnMediaWebsites = persistent<boolean>("runOnMediaWebsites", true);
