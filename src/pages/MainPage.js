import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { Group } from "../components/Group";
import { NotesTable } from "../components/NoteTable";
import { Select } from "../components/Select";
import { Spacing } from "../components/Spacing";
import {
	create,
	selectActiveNotes,
	selectArchivedNotes,
} from "../features/notes/notesSlice";

export function MainPage() {
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState(0);
	const activeNotes = useSelector(selectActiveNotes);
	const archivedNotes = useSelector(selectArchivedNotes);

	const handleCreateNote = () => dispatch(create());

	return (
		<>
			<Spacing y={30} />

			<Group centered fullWidth>
				<Select
					options={["Active notes", "Archived notes"]}
					onChange={(evt) => {
						setActiveTab(evt.target.selectedIndex);
					}}
				/>

				<Button onClick={handleCreateNote}>Create note</Button>
			</Group>

			<Spacing y={30} />

			<NotesTable
				activeTab={activeTab}
				notes={activeTab === 0 ? activeNotes : archivedNotes}
			/>
		</>
	);
}
