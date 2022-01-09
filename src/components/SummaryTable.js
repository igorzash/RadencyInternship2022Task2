import React from "react";
import { Table, TableColumn, TableRow } from "./Table";

export const SummaryTable = ({ data }) => (
	<Table headers={["Category", "Active", "Archived"]}>
		{data.map((item) => (
			<TableRow key={item.category}>
				<TableColumn>{item.category}</TableColumn>
				<TableColumn>{item.active}</TableColumn>
				<TableColumn>{item.archived}</TableColumn>
			</TableRow>
		))}
	</Table>
);
