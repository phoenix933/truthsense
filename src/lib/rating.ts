import { RatingLevel } from "$types/RatingLevel";

const CRITERIA_POINTS = [
	22, // 1
	18, // 2
	12.5, // 3
	12.5, // 4
	10, // 5
	7.5, // 6
	7.5, // 7
	5, // 8
	5, // 9
];

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

export function calculateRating(criteria: boolean[]) {
	return criteria.reduce((rating: number, criterium: boolean, index: number) => {
		return rating + (criterium ? CRITERIA_POINTS[index] : 0);
	}, 0);
}

export const getNumberOfPassedCriteria = (criteria: boolean[]) =>
	criteria.filter((criterium: boolean) => criterium).length;
