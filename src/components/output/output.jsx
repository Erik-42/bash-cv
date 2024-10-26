import React from "react";
import styles from "./__output.scss";

export default function CommandOutput({ activeCommand }) {
	return <div className='userInput__output'>{activeCommand}</div>;
}
