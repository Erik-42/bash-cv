import React from 'react';
import './__home.scss'; // Import des styles spécifiques à la page
import Sidebar from 'layout/sidebar/sidebar'; // Importation du Sidebar
import Terminal from '../../components/terminal/terminal';

export default function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home__content'>
        <Terminal />
        {/* Contenu supplémentaire */}
      </div>
    </div>
  );
}

