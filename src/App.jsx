import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import It from './views/It/It';
import Rym from './views/Rym/Rym';
import Dapi from './views/Dapi/Dapi';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innova-tech" element={<It />} />
        <Route path="/drivers-api" element={<Dapi />} />
        <Route path="/riack-and-morty" element={<Rym />} />
      </Routes>
    </div>
  );
}

export default App;
