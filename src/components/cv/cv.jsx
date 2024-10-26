import React from "react";
import "./__cv.scss";

export default function Cv() {
	return (
		<div className='cv'>
			<h2 className='cv__title'>CV:</h2>
			<p className='cv__text'>Voici mon CV</p>
			<iframe
				className='cv__iframe'
				src='../../assets/data/Erik-Mesen_CV.pdf'
				title='CV Erik Mesen'></iframe>
			<iframe
				style='border: 1px solid rgba(0, 0, 0, 0.1);'
				width='800'
				height='450'
				src='https://embed.figma.com/design/H17d3Plq2fxppmKcQXfB0p/Cv-Eric-Breteau?node-id=1-9&embed-host=share'
				allowfullscreen></iframe>
		</div>
	);
}

export function CvDownload() {
	return (
		<div className='cv'>
			<h2 className='cv__title'>CV:</h2>
			<p className='cv__text'>
				Download from
				<a
					className='cv__download'
					href='../../assets/data/Erik-Mesen_CV.pdf'
					target='_blank'
					rel='noopener noreferrer'>
					here
				</a>
				.
				<br />
				<a href='https://www.figma.com/proto/H17d3Plq2fxppmKcQXfB0p/Cv-Eric-Breteau?node-id=1-9&node-type=frame&t=E3i2UoaYXC5DOjKR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A9&share=1'>
					prototype Figma
				</a>
			</p>
		</div>
	);
}
