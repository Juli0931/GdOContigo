import GdOLogo from "../../assets/GdO_logo.svg";
import { BiUniversalAccess } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaChevronDown, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./NavBar.css";

const SubmenuA = () => {
  return (
    <div className="submenu">
      <ul>
        <li><Link to="/PagoFactura">Paga tu factura</Link></li>
        <li><Link to="/FacturacionDigital">Facturación digital</Link></li>
        <li><a href="#">Duplicados de facturas</a></li>
        <li><a href="#">Puntos de pago</a></li>
        <li><a href="#">Acuerdos de pago</a></li>
      </ul>
    </div>
  );
};

const SubmenuB = () => {
  return (
    <div className="submenu">
      <div className="submenuContainer">
        <ul>
          <li><h3>Residencial y comercial</h3></li>
          <li><a href="#">Servicios disponibles</a></li>
          <li><Link to="/Instalacion_y_mantenimiento">Instalación y mantenimiento"</Link></li>
          <li><a href="#">Consejos para el uso eficiente del gas</a></li>
        </ul>

        <ul>
          <li><h3>Industrial y constructoras</h3></li>
          <li><a href="#">Brilla</a></li>
          <li><a href="#">GNV (Gas Natural Vehicular)</a></li>
          <li><a href="#">Laboratorio de metrología</a></li>
          <li><a href="#">Manejo seguro del gas natural</a></li>
        </ul>

        <ul>
          <li><h3>Programas especiales</h3></li>
          <li><a href="#">Servicios disponibles</a></li>
          <li><a href="#">Instalación y mantenimiento</a></li>
          <li><a href="#">Consejos para el uso eficiente del gas</a></li>
        </ul>
      </div>
    </div>
  );
};

const SubmenuC = () => {
  return (
    <div className="submenu">
      <div className="submenuContainer">
        <ul>
          <li><h3>Aprender con GdO</h3></li>
          <li><a href="#">Tutoriales y guías paso a paso</a></li>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Consejos de seguridad</a></li>
        </ul>

        <ul>
          <li><h3>Ahorra con GdO</h3></li>
          <li><Link to={"/RetosAmbiente"}><a href="#">Desafios de ahorro energético</a></Link></li>
          <li><a href="#">Programas de incentivos</a></li>
          <li><a href="#">Consejos para ahorrar energía</a></li>
        </ul>
      </div>
    </div>
  );
};

const SubmenuD = () => {
  return (
    <div className="submenu">
      <div className="submenuContainer">
        <ul>
          <li><h3>Información para accionistas</h3></li>
          <li><a href="#">Datos claves para accionistas</a></li>
          <li><a href="#">Reportes financieros y resultados</a></li>
          <li><a href="#">Encuesta sobre el codigo país</a></li>
        </ul>

        <ul>
          <li><h3>Gobierno corporativa</h3></li>
          <li><a href="#">Políticas y prácticas de gobierno corporativo</a></li>
          <li><a href="#">Compromiso con la comunidad y cumplimiento normativo</a></li>
        </ul>
      </div>
    </div>
  );
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <section className="firstNav">
        <div className="accessibilityMenu">
          <h3 className="navTitle">Accesibilidad</h3>
          <BiUniversalAccess className="accessIcon" />
        </div>
      </section>
      <section className={`secondNav ${isOpen ? "open" : ""}`}>
        <nav>
          <button className="menuButton" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="closeIcon" /> : <FaBars className="hamburgerIcon" />}
          </button>

          {!isOpen && (
            <Link to="/">
              <img src={GdOLogo} alt="GdO Logo" className="GdO_logo" />
            </Link>
          )}

          <ul className={`firstMenu ${isOpen ? "active" : ""}`}>
            <li><a href="#">Sobre GdO</a></li>
            <li className="pagoFac">
              <a href="#">Pagos y facturación <FaChevronDown className="chevron" /></a>
              <SubmenuA />
            </li>
            <li className="Servicios">
              <a href="#">Servicios <FaChevronDown className="chevron" /></a>
              <SubmenuB />
            </li>
            <li className="Contigo">
              <a href="#">GdO Contigo <FaChevronDown className="chevron" /></a>
              <SubmenuC />
            </li>
            <li className="Inversionistas">
              <a href="#">Inversionistas <FaChevronDown className="chevron" /></a>
              <SubmenuD />
            </li>
            <li className="AtenciónCliente">
              <Link to="/AtenciónCliente">Atención al cliente</Link>
            </li>
          </ul>

          {!isOpen && (
            <div className="searchMenu">
              <IoSearch className="searchIcon" />
              <Link to="/LoginUser">
                <button>
                  <FaRegUser />
                  <h3>Soy cliente GdO</h3>
                </button>
              </Link>
            </div>
          )}
        </nav>
      </section>
    </header>
  );
}