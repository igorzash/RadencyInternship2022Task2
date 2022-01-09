import React from "react";
import styles from "./Input.module.css";

export const Input = ({ value, onChange }) => (
	<input className={styles.input} value={value} onChange={onChange} />
);
