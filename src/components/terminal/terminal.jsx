import React, { useState } from "react";
import "./__terminal.scss";
import UserInput from "../userInput/userInput";

export default function Terminal() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<main className='terminal'>
			<div className='terminal__injected' id='injected'></div>
			<div className='terminal__userRoot'>
				<UserInput inputValue={inputValue} handleChange={handleChange} />
			</div>
		</main>
	);
}
