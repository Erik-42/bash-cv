import React from "react";
import "./__universe.scss";
import imgUniverse from "./universe.webp";

export default function universe() {
	return (
		<div>
			<img src={imgUniverse} className='imgUniverse' />
		</div>
	);
}
