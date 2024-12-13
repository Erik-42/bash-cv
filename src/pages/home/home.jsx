import React, { useState } from "react";
import "./__home.scss";
import Sidebar from "layout/sidebar/sidebar";
import Terminal from "../../components/terminal/terminal";

export default function Home() {
	const [hasOutput, setHasOutput] = useState(false);

	return (
		<div className='home'>
			<Sidebar hasOutput={hasOutput} />
			<div className='home__content'>
				<Terminal />
			</div>
		</div>
	);
}
