import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar} from "../../components";
import agendarLogo from "../../assets/agendarLogo.png";

import "./estilos/FechaHora.css"

const Checks = ({ id, label, checked, onChange }) => {
    return (
        <div className="horas">
            <input
                className='check'
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export function FechaHora() {
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedIds(prevSelectedIds => {
            if (prevSelectedIds.includes(id)) {
                return prevSelectedIds.filter(selectedId => selectedId !== id);
            } else if (prevSelectedIds.length < 2) {
                return [...prevSelectedIds, id];
            } else {
                return prevSelectedIds;
            }
        });
    };

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const times = [
        { id: 1, label: "8:30 am" },
        { id: 2, label: "9:30 am" },
        { id: 3, label: "10:30 am" },
        { id: 4, label: "12:30 pm" },
        { id: 5, label: "2:30 pm" },
    ];

    return (
        <div className="agendarDiv">
            <NavBar></NavBar>
            <section className="agendarContainer">
                <div className="agendarHeader">
                    <img className="agendarLogo" src={agendarLogo} alt="" />
                    <h1 className="modTitulo">Elige la fecha y la hora de tu cita</h1>
                </div>
                <div className="fechaContainer">
{/* el calendario es muy difícil de editar, no lo puedo dejar completamente fiel al figma */}
                    <p className='horaText'>Seleccione una fecha.</p>
                    <input 
                        type="date" 
                        className="dateInput" 
                        value={selectedDate} 
                        onChange={handleDateChange} 
                    />
                </div>
                <h2 className='citasSubTitulo'>Horarios disponibles</h2>
                <p className='horaText'>Selecciona un rango horario para la visita del técnico de GdO a tu domicilio.</p>
                <div className="checksContainer">

                    {times.map(time => (
                        <Checks
                            key={time.id}
                            id={`checkbox-${time.id}`}
                            label={time.label}
                            checked={selectedIds.includes(time.id)}
                            onChange={() => handleCheckboxChange(time.id)}
                        />
                    ))}
                </div>
                <button className='regresar'><Link to="/Datos">Continuar</Link></button>
            </section>
        </div>
    );
}