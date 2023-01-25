import { persistent } from "$lib/storage";

export const facebookUsed = persistent("facebookUsed", true);
export const twitterUsed = persistent("twitterUsed", true);
export const websitesUsed = persistent("websitesUsed", true);
