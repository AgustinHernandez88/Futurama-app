import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CharacterDetail from '../pages/CharacterDetail';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Home />} /> 
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      </Routes>
  );
};

export default AppRouter;
