import React, { useState } from 'react';
import './Filter.css';

export function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src="src\assets\Sort.png" alt="Ícono" className="icon" />
        Filtrar
        <img src="src\assets\drop.png" alt="Ícono" className="icon2" />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <input type="checkbox" id="option-1" />
            <label htmlFor="option-1">Eventos</label>
          </li>
          <li className="dropdown-item">
            <input type="checkbox" id="option-2" />
            <label htmlFor="option-2">Noticias</label>
          </li>
          <li className="dropdown-item">
            <input type="checkbox" id="option-3" />
            <label htmlFor="option-3">Tips</label>
          </li>
        </ul>
      )}
    </div>
  );
}

