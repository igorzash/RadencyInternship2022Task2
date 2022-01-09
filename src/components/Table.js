import React from "react";
import styles from "./Table.module.css";

export const TableRow = ({ children, header }) => (
	<div className={`${styles.tableRow} ${header ? styles.header : null}`}>
		{children}
	</div>
);

export const TableColumn = ({ children }) => (
	<div className={styles.tableColumn}>{children}</div>
);

export const Table = ({ headers, children }) => (
	<div className={styles.table}>
		<TableRow header>
			{headers.map((header) => (
				<TableColumn key={header}>{header}</TableColumn>
			))}
		</TableRow>

		{children}
	</div>
);
