import React from 'react';
import './__cv.scss';

export default function Cv() {
  return (
    <div className='cv'>
      <h2 className='cv__title'>CV:</h2>
      <p className='cv__text'>Voici mon CV</p>
      <iframe
        className='cv__iframe'
        src="/assets/data/Erik-Mesen_CV.pdf"
        title="CV Erik Mesen"
      ></iframe>
    </div>
  );
}

export function CvDownload() {
  return (
    <div className='cv'>
      <h2 className='cv__title'>CV:</h2>
      <p className='cv__text'>
        Download from{' '}
        <a
          href="/assets/data/Erik-Mesen_CV_2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>
    </div>
  );
}
