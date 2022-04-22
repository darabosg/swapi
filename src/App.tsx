import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Character from './pages/Character/Character';
import Home from './pages/Home/Home';
import Species from './pages/Species/Species';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="species" element={<Species />} />
          <Route path="character" element={<Character />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
