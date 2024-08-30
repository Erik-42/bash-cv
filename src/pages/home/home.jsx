import React from 'react';
import './__home.scss'; // Import des styles spécifiques à la page
import Header from 'layout/header/header'; // Importation du Header
import Footer from 'layout/footer/footer'; // Importation du Footer
import Sidebar from 'layout/sidebar/sidebar'; // Importation du Sidebar
import Terminal from '../../components/terminal/terminal';

function Home() {
  return (
    <div className='home'>
      <Header />
      <Sidebar />
      <main className='content'>
        {/* Contenu supplémentaire */}
        <Terminal></Terminal>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

