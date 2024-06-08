import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Work from './views/Work/Work';
import InnovaTech from './projects/InnovaTech';
import DriversApi from './projects/DriversApi';
import RickAndMorty from './projects/RickAndMorty';
import i18n from './i18n';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/innova-tech" element={<InnovaTech />} />
        <Route path="/work/drivers-api" element={<DriversApi />} />
        <Route path="/work/rick-and-morty" element={<RickAndMorty />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
