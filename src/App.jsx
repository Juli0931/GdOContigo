import React from 'react';
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home , PagoFactura , Login, PsePago, HistoryUser, FacturacionDigital, FacturacionDigital2, AtenciónCliente } from './pages';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PagoFactura" element={<PagoFactura />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/PsePago" element={<PsePago />} />
        <Route path="/HistoryUser" element={<HistoryUser />} />
        <Route path="/AtenciónCliente" element={<AtenciónCliente />} />
        <Route path="/FacturacionDigital" element={<FacturacionDigital />} />
        <Route path="/FacturacionDigital2" element={<FacturacionDigital2 />} />
    
      </Routes>
    </BrowserRouter>
  );
}