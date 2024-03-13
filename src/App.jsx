import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Innova from './views/Innova/Innova';
import Formula1 from './views/Formula1/Formula1';
import Rym from './views/Rym/Rym';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innova-tech" element={<Innova />} />
        <Route path="/drivers-api" element={<Formula1 />} />
        <Route path="/rick-and-morty" element={<Rym />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
