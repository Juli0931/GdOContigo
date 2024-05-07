import { useState, useEffect } from "react";
import GdOLogo from "../../assets/GdO_logo.svg";
import FondoPagos from "../../assets/FondoPagos.jpg";

import "./Forms.css";

const Labels = ({texto, text}) =>{
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
            <div>
                <h2>{number}</h2>
            </div>
        </>
    )
}

export function Forms() {
  return (
    <>
    <section>
        <img src={GdOLogo} alt="" />
        <Indicator number={<>1</>}/>
        <Indicator number={<>2</>}/>
        <Indicator number={<>3</>}/>
        <form action="">
            <Labels texto={<>Número de contrato o referencia</>}/>
            <Labels texto={<>Correo electrónico</>}/> 
            <Labels texto={<>Teléfono fijo</>}/>
            <Labels texto={<>Teléfono celular</>}/>
            <label htmlFor="">Autorizo el tratamiento de mis datos</label>
            <form action="">
                <label htmlFor=""><input type="radio" /> Sí</label> 
                <label htmlFor=""><input type="radio" /> No</label>
            </form>
            <button>Continuar</button>
        </form>
    </section>
    <section>
        <img src={FondoPagos} alt="" />
        <h4>¿Necesitas ayuda?</h4><h5>Mira nuestra guía</h5>
    </section>
    </>
  );
}
