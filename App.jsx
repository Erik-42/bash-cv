import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/pages/home/home.jsx'; // Page d'accueil
import Error404 from './src/pages/error404/error404.jsx'; // Page d'erreur 404
// import Sidebar from './src/layout/sidebar/sidebar.jsx'; // Sidebar
// import Header from './src/layout/header/header.jsx'; // Header
import Footer from './src/layout/footer/footer.jsx'; // Footer

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          {/* Route supplémentaire à ajouter ici */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

