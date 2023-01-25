import { persistent } from "$lib/storage";

export const facebookUsed = persistent<boolean>("facebookUsed", true);
export const twitterUsed = persistent<boolean>("twitterUsed", true);
export const websitesUsed = persistent<boolean>("websitesUsed", true);
