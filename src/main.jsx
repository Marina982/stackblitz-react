import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

const InvalidAccess = () => (
  <div>
    <p>Acesso inválido. Você precisa estar logado para continuar.</p>
    <Link to="/">Voltar ao login</Link>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem('token') ? <Navigate to="/home" /> : <InvalidAccess />
          }
        />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
