import React from "react";
import { Button } from "./Button";

export const IconButton = (props) => (
	<Button {...props}>
		<span className="material-icons">{props.iconName}</span>
	</Button>
);
