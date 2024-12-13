import React from "react";
import "./__life.scss";
import imgLife from "./life.jpeg";

export default function life() {
	return (
		<div>
			<img src={imgLife} className='imgLife' />
		</div>
	);
}
