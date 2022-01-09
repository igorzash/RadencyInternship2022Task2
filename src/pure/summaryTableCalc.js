import { CATEGORY } from "../features/notes/notesSlice";

export function summaryTableCalc(notes) {
	const categories = Object.values(CATEGORY);

	return categories
		.map((cat) => Array.from(notes).filter((n) => n.category === cat))
		.map((n, i) => ({
			category: categories[i],
			active: n.filter((n) => !n.archived).length,
			archived: n.filter((n) => n.archived).length,
		}));
}
