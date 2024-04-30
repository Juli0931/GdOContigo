import { useState, useEffect } from "react";
import GdOLogo from "../../assets/GdO_logo.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiUniversalAccess } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaChevronDown } from "react-icons/fa6";

import "./NavBar.css";

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
                    <li>
                        <a href="">Pagos y facturación <FaChevronDown className="chevron"/></a>
                        <section className="submenu">
                        <ul>
                            <div>
                                <li><a href=""></a>Paga tu factura</li>
                                <li><a href=""></a>Paga tu factura</li>
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
                    </li>
                    <li>
                        <a href="">Servicios <FaChevronDown className="chevron"/></a>
                        <section className="submenu">
                        <ul>
                            <div>
                                <li><a href=""></a>Paga tu factura</li>
                                <li><a href=""></a>Paga tu factura</li>
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
                    </li>
                    <li>
                        <a href="">GdO Contigo <FaChevronDown className="chevron"/></a>
                        <section className="submenu">
                        <ul>
                            <div>
                                <li><a href=""></a>Paga tu factura</li>
                                <li><a href=""></a>Paga tu factura</li>
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
                    </li>
                    <li>
                        <a href="">Inversionistas <FaChevronDown className="chevron"/></a>
                        <section className="submenu">
                        <ul>
                            <div>
                                <li><a href=""></a>Paga tu factura</li>
                                <li><a href=""></a>Paga tu factura</li>
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
