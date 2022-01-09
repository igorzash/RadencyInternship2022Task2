import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NotesTable } from "../components/NoteTable";
import { Select } from "../components/Select";
import { Spacing } from "../components/Spacing";
import {
	selectActiveNotes,
	selectArchivedNotes,
} from "../features/notes/notesSlice";

export function MainPage() {
	const [activeTab, setActiveTab] = useState(0);
	const activeNotes = useSelector(selectActiveNotes);
	const archivedNotes = useSelector(selectArchivedNotes);

	return (
		<>
			<Spacing y={30} />

			<Select
				options={["Active notes", "Archived notes"]}
				onChange={(evt) => {
					setActiveTab(evt.target.selectedIndex);
				}}
			/>

			<NotesTable
				activeTab={activeTab}
				notes={activeTab === 0 ? activeNotes : archivedNotes}
			/>
		</>
	);
}
