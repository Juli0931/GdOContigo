import React from 'react';
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home , PagoFactura , Login, PsePago, HistoryUser, FacturacionDigital, FacturacionDigital2, AtenciónCliente, Instalacion, VerOModificar, NuevaCita, FechaHora, Datos } from './pages';


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
        <Route path="/Instalacion_y_mantenimiento" element={<Instalacion />} />
        <Route path="/Ver_o_Modificar" element={<VerOModificar />} />
        <Route path="/Nueva_Cita" element={<NuevaCita />} />
        <Route path="/Fecha_y_Hora" element={<FechaHora />} />
        <Route path="/Datos" element={<Datos />} />
    
      </Routes>
    </BrowserRouter>
  );
}