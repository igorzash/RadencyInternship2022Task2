import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

const DAY = 24 * 60 * 60 * 1000;

function randomDate() {
	const date = new Date();
	date.setTime(date.getTime() - getRandomInt(5, 10) * DAY);
	return date;
}

export const CATEGORY = {
	TASK: "Task",
	RTHOUGHT: "Random Thought",
	IDEA: "Idea",
};

const initialState = {
	notes: [
		{
			contents: "buy milk",
			category: CATEGORY.TASK,
		},
		{
			contents: "buy gift",
			category: CATEGORY.TASK,
		},
		{
			contents: "what if earth is flat",
			category: CATEGORY.RTHOUGHT,
		},
		{
			contents: "meeting with coworker 5/5/2022",
			category: CATEGORY.TASK,
		},
		{
			contents: "meeting with coworker 5/7/2022",
			category: CATEGORY.TASK,
		},
		{
			contents: "resolve issue #4939 using X",
			category: CATEGORY.IDEA,
		},
		{
			contents: "read 10 books 3/5/2022-4/6/2022",
			category: CATEGORY.TASK,
		},
	].map((note) => ({
		...note,
		id: v4(),
		archived: false,
		date: randomDate().toJSON(),
	})),
};

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		create: (state) => {
			state.notes.unshift({
				id: v4(),
				contents: "",
				category: CATEGORY.TASK,
				date: new Date().toJSON(),
			});
		},
		remove: (state, action) => {
			state.notes = state.notes.filter(
				(note) => note.id !== action.payload.id
			);
		},
		toggleArchived: (state, action) => {
			state.notes = state.notes.map((note) => {
				if (note.id !== action.payload.id) return note;
				note.archived = !note.archived;
				return note;
			});
		},
		edit: (state, action) => {
			state.notes = state.notes.map((note) => {
				if (note.id !== action.payload.id) return note;
				note.contents = action.payload.contents;
				note.category = action.payload.category;
				return note;
			});
		},
	},
});

export const { create, remove, toggleArchived, edit } = notesSlice.actions;

export const selectNotes = (state) => state.notes.notes;

export const selectActiveNotes = (state) =>
	state.notes.notes.filter((note) => !note.archived);

export const selectArchivedNotes = (state) =>
	state.notes.notes.filter((note) => note.archived);

export default notesSlice.reducer;
