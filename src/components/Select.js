import React from "react";
import styles from "./Select.module.css";

export const Select = ({ options, onChange }) => (
	<select onChange={onChange} className={styles.select}>
		{options.map((option) => (
			<option key={option}>{option}</option>
		))}
	</select>
);
