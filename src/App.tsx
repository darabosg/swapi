import React from 'react';
import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Character from './pages/Character/Character';
import Home from './pages/Home/Home';
import Species from './pages/Species/Species';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="species/:id" element={<Species />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
