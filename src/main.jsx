import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import AuthMiddleware from './middleware.jsx';
import Registra from './Components/Registrar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthMiddleware/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<App/>} />
        <Route path="/registrar" element={<Registra/>} />
        <Route/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
