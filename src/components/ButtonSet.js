import React from "react";
import styles from "./ButtonSet.module.css";

export const ButtonSet = ({ children }) => (
	<div className={styles.buttonSet}>{children}</div>
);
