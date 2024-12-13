import React from "react";
import "./__everything.scss";
import imgEverything from "./everything.jpeg";

export default function everything() {
	return (
		<div>
			<img src={imgEverything} className='imgEverything' />
		</div>
	);
}
