import React from 'react';
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home , PagoFactura , Login, PsePago } from './pages';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PagoFactura" element={<PagoFactura />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/PsePago" element={<PsePago />} />
      </Routes>
    </BrowserRouter>
  );
}