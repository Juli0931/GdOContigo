import GdOLogo from "../../assets/GdO_logo.svg";
import FondoPagos from "../../assets/FondoPagos.jpg";

import "./Forms.css";
import { Link } from "react-router-dom";

export const Labels = ({texto, placeHolderText}) =>{
    return(
        <>
            <div className="inputs">
                <label htmlFor="">{texto}</label>
                <input type="text" placeholder={placeHolderText}/>
            </div>
        </>
    )
}

export const Indicator = ({number, classNameText}) =>{
    return(
        <>
            <div className={classNameText}>
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
            <Indicator number={<>1</>} classNameText={"indicator"}/>
            <div class="linea-punteada"></div>
            <Indicator number={<>2</>} classNameText={"indicatorVacio"}/>
            <div class="linea-punteada"></div>
            <Indicator number={<>3</>} classNameText={"indicatorVacio"}/>
        </div>
        </div>
        <form action="">
            <Labels texto={<>Número de contrato o referencia</>} placeHolderText={"Ej: 1411578"}/>
            <Labels texto={<>Correo electrónico</>} placeHolderText={"Ejemplo@gmail.com"}/> 
            <Labels texto={<>Teléfono fijo</>} placeHolderText={"Ej: 3232996966"}/>
            <Labels texto={<>Teléfono celular</>} placeHolderText={"Ej: 3188828256"}/>
            <section className="tratamientoSection">
            <label htmlFor="" className="tratamiento">Autorizo el tratamiento de mis datos</label>
            <div className="formRadio">
                <label htmlFor=""><input type="radio" /> Sí</label> 
                <label htmlFor=""><input type="radio" /> No</label>
            </div>
            </section>
            <Link to='/PsePago'>
            <button className="continueButton">Continuar</button>
            </Link>
        </form>
    </section>
    <section className="sectionRight">
        <img src={FondoPagos} alt="" />
        <div className="helpDiv"><h4>¿Necesitas ayuda?</h4><h5>Mira nuestra guía</h5></div>
    </section>
    </>
  );
}
