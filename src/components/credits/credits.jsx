import React from 'react';
import   './__credits.scss'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Credits() { 
  return (
    <p className='creditTitle'> 
      Built by
      <a href="https://www.github.com/Erik-42" target="_blank" rel="noopener noreferrer">
        <i FontAwesome icon={faGithub}></i> 
        Erik-42
      </a>
    </p>
  );
}

