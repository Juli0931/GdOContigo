import GdOLogo from "../../assets/GdO_logo.svg";
import { BiUniversalAccess } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaChevronDown } from "react-icons/fa6";

import { Link } from "react-router-dom";

import "./NavBar.css";

const Submenu = () =>{
    return(
        <>
        <section className="submenu">
                        <ul>
                            <div>
                            <li><Link to="/PagoFactura">Paga tu factura</Link></li>
                                <li><a href=""></a>Facturación digital</li>
                            </div>
                            <div>
                                <li><a href=""></a>Duplicados de facturas</li>
                                <li><a href=""></a>Puntos de pago</li>
                            </div>
                            <div>
                                <li><a href=""></a>Acuerdos de pago</li>
                            </div>
                        </ul>
                        </section>
        </>
    )
}

export function NavBar() {
  return (
    <>
    <header>
        <section className="firstNav">
            <div className="accesibilityMenu">
                <h3 className="navTitle">Accesibilidad</h3>
                <BiUniversalAccess className="accessIcon" />
            </div>
        </section>
        <section className="secondNav">
            <nav>
                <img src={GdOLogo} className="GdO_logo" />
                <ul className="firstMenu">
                    <li><a href="">Sobre GdO</a></li>
                    <li className="pagoFac">
                        <a href="">Pagos y facturación <FaChevronDown className="chevron"/></a>
                        <Submenu></Submenu>
                    </li>
                    <li className="Servicios">
                        <a href="">Servicios <FaChevronDown className="chevron"/></a>
                        <Submenu></Submenu>
                    </li>
                    <li className="Contigo">
                        <a href="">GdO Contigo <FaChevronDown className="chevron"/></a>
                        <Submenu></Submenu>
                    </li>
                    <li className="Inversionistas">
                        <a href="">Inversionistas <FaChevronDown className="chevron"/></a>
                        <Submenu></Submenu>
                    </li>
                </ul>
            </nav>
            <div className="searchMenu">
                <IoSearch className="searchIcon"/>
                <button>
                    <FaRegUser />
                    <h3>Atención al cliente</h3>
                </button>
            </div>
        </section>
    </header>
    </>
  );
}
