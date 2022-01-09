import React from "react";
import styles from "./Group.module.css";

export const Group = ({ children, centered, fullWidth }) => (
	<div
		className={`${styles.group} ${centered && styles.centered} ${
			fullWidth && styles.fullWidth
		}`}
	>
		{children}
	</div>
);
