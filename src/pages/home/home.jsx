import React from "react";
import "./__home.scss";
import Sidebar from "layout/sidebar/sidebar";
import Terminal from "../../components/terminal/terminal";

export default function Home() {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home__content'>
				<Terminal />
			</div>
		</div>
	);
}
