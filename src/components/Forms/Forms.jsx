import { useState, useEffect } from "react";
import GdOLogo from "../../assets/GdO_logo.svg";
import FondoPagos from "../../assets/FondoPagos.jpg";

import "./Forms.css";

const Labels = ({texto}) =>{
    return(
        <>
            <div className="inputs">
                <label htmlFor="">{texto}</label>
                <input type="text" />
            </div>
        </>
    )
}

const Indicator = ({number}) =>{
    return(
        <>
            <div className="indicator">
                <h2>{number}</h2>
            </div>
        </>
    )
}

export function Forms() {
  return (
    <>
    <section className="sectionLeft">
        <div className="logoDiv">
        <img src={GdOLogo} className="GDOLogo" />
        <div className="indicatorDiv">
            <Indicator number={<>1</>}/>
            <Indicator number={<>2</>}/>
            <Indicator number={<>3</>}/>
        </div>
        </div>
        <form action="">
            <Labels texto={<>Número de contrato o referencia</>}/>
            <Labels texto={<>Correo electrónico</>}/> 
            <Labels texto={<>Teléfono fijo</>}/>
            <Labels texto={<>Teléfono celular</>}/>
            <label htmlFor="" className="tratamiento">Autorizo el tratamiento de mis datos</label>
            <form action="" className="formRadio">
                <label htmlFor=""><input type="radio" /> Sí</label> 
                <label htmlFor=""><input type="radio" /> No</label>
            </form>
            <button className="continueButton">Continuar</button>
        </form>
    </section>
    <section className="sectionRight">
        <img src={FondoPagos} alt="" />
        <h4>¿Necesitas ayuda?</h4><h5>Mira nuestra guía</h5>
    </section>
    </>
  );
}
