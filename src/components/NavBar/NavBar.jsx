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
                <ul>
                    <li>Sobre GdO</li>
                    <li>Pagos y facturación <FaChevronDown className="chevron"/></li>
                    <li>Servicios <FaChevronDown className="chevron"/></li>
                    <li>GdO Contigo <FaChevronDown className="chevron"/></li>
                    <li>Inversionistas <FaChevronDown className="chevron"/></li>
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
