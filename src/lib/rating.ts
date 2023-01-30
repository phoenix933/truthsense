import { RatingLevel } from "$types/RatingLevel";

export function getRatingLevel(rating: number) {
	if (rating === 100) {
		return RatingLevel.HighCredibility;
	} else if (rating >= 80 && rating < 100) {
		return RatingLevel.GenerallyCredible;
	} else if (rating >= 60 && rating < 80) {
		return RatingLevel.SomewhatCredible;
	} else if (rating >= 40 && rating < 60) {
		return RatingLevel.LowCredibility;
	} else {
		return RatingLevel.NotCredible;
	}
}
