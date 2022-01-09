import React from "react";
import styles from "./Select.module.css";

export const Select = ({ options, onChange, value }) => (
	<select onChange={onChange} className={styles.select} value={value}>
		{options.map((option) => (
			<option key={option}>{option}</option>
		))}
	</select>
);
