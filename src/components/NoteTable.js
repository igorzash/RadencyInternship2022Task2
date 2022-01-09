import React, { useState } from "react";
import { TableColumn, TableRow, Table } from "./Table";
import { datesParser } from "../pure/datesParser";
import { IconButton } from "./IconButton";
import { ButtonSet } from "./ButtonSet";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { edit, remove, toggleArchived } from "../features/notes/notesSlice";

export const NoteTableRow = ({ note, activeTab }) => {
	const dispatch = useDispatch();

	const [contents, setContents] = useState(note.contents);
	const [category, setCategory] = useState(note.category);

	const [editState, setEditState] = useState(false);
	const handleEdit = () => setEditState(true);
	const handleDismiss = () => {
		setContents(note.contents);
		setCategory(note.category);
		setEditState(false);
	};
	const handleSave = () => {
		dispatch(edit({ id: note.id, contents, category }));
		setEditState(false);
	};
	const handleRemove = () => {
		dispatch(remove({ id: note.id }));
	};
	const handleToggleArchived = () => {
		dispatch(toggleArchived({ id: note.id }));
	};

	let dates = datesParser(note.contents);

	if (dates) dates = dates.join(", ");

	return (
		<TableRow>
			<TableColumn>
				{editState ? (
					<Input
						value={contents}
						onChange={(evt) => setContents(evt.target.value)}
					/>
				) : (
					note.contents
				)}
			</TableColumn>
			<TableColumn>
				{new Date(note.date).toLocaleDateString("en-US")}
			</TableColumn>
			<TableColumn>{note.category}</TableColumn>
			<TableColumn>{dates}</TableColumn>
			<TableColumn>
				<ButtonSet>
					{activeTab === 0 &&
						(editState ? (
							<>
								<IconButton
									iconName="save"
									onClick={handleSave}
								/>
								<IconButton
									iconName="cancel"
									onClick={handleDismiss}
								/>
							</>
						) : (
							<IconButton iconName="edit" onClick={handleEdit} />
						))}
					{!editState && (
						<>
							<IconButton
								iconName="archive"
								onClick={handleToggleArchived}
							/>
							<IconButton
								iconName="delete"
								onClick={handleRemove}
							/>
						</>
					)}
				</ButtonSet>
			</TableColumn>
		</TableRow>
	);
};

export const NotesTable = ({ notes, activeTab }) => (
	<Table headers={["Contents", "Date", "Category", "Dates", "Actions"]}>
		{notes.map((note) => (
			<NoteTableRow key={note.id} note={note} activeTab={activeTab} />
		))}
	</Table>
);
