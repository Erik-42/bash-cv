import React from 'react';
import styles from './cv.module.scss';

export function Cv() {
  return (
    <div className={styles.cvContainer}>
      <h2 className={styles.cvTitle}>CV:</h2>
      <p style={{ textAlign: 'left' }}>Voici mon CV</p>
      <iframe
        className={styles.cvIframe}
        src="/assets/data/Erik-Mesen_CV.pdf"
        type="application/pdf"
        title="CV Erik Mesen"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
}


export function CvDownload() {
  return (
    <div className={styles.cvContainer}>
      <h2 className={styles.cvTitle}>CV:</h2>
      <p style={{ textAlign: 'left' }}>
        Download from{' '}
        <a
          href="/assets/data/Erik-Mesen_CV_2023.pdf"
          target="_blank"
          style={{ textDecoration: 'underline' }}
        >
          here
        </a>.
      </p>
    </div>
  );
}

