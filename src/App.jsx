import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import It from './views/It/It';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innova-tech" element={<It />} />
      </Routes>
    </div>
  );
}

export default App;
