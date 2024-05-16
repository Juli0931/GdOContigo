import { Link } from 'react-router-dom';
import FacturacionImg from "../../assets/FacturacionImg1.png";
import Indicador from "../../assets/IndicadorFacturacion1.png";
import captcha from "../../assets/captcha.png";

import "./FacturacionD.css";

const Labels = ({texto, labelClassname, placeholder}) =>{
    return(
        <>
            <div className="inputs">
                <label className={labelClassname} htmlFor="">{texto}</label>
                <input className="facturacionInput" type="text" placeholder={placeholder}/>
            </div>
        </>
    )
}
export function FacturacionD() {
  return (
    <>
    <div className="facturacionHeader">
        <h1 className="facturacionTitulo">Facturación digital</h1>
        <img className="indicador" src={Indicador} alt="" />
    </div>
    <section className="facturacionContainer">
        <form className="facturacionForm" action="">
            <Labels texto={<>Número de contrato o referencia</>} placeholder="Ej: 1411578"/>
            <Labels texto={<>Últimos 4 números de la factura</>} placeholder="Ej: 7117"/> 
            <div className="documento">
                        <Labels labelClassname="Doc" texto="Número de documento" placeholder="Ej: 1785252362" />
                        <div className="selectorDocumento">
                            <select className="listaDocumentos">
                                <option value="" disabled selected hidden>Tipo de documento</option>
                                <option value="cc">Cédula de ciudadanía</option>
                                <option value="ce">Cédula de extranjería</option>
                                <option value="pa">Pasaporte</option>
                            </select>
                        </div>
                    </div>
            <label htmlFor="" className="tipoUsuario">Tipo de usuario</label>
            <div className="formRadio">
                <label htmlFor=""><input type="radio" name="tipoUsuario" />Arrendatario</label> 
                <label htmlFor=""><input type="radio" name="tipoUsuario"/>Propietario</label>
            </div>
            <div className="terms">
                <input type="checkbox" id="terms" name="terms" />
                    <label className="termsLabel" htmlFor="terms">
                        Acepto los <span className="highlight">términos</span> y <span className="highlight">condiciones</span> para el envío de la facturación digital
                    </label>
            </div>
            <div className="captcha">
                <input type="checkbox" id="robot" />
                <label htmlFor="robot">No soy un robot</label>
                <img className="recaptcha" src={captcha} alt="" />
            </div>
            <button className="continue">
                <Link to="/FacturacionDigital2">CONTINUAR</Link>
            </button>
        </form>
        <div className="imageContainer">
            <img className="facturacionImg" src={FacturacionImg} alt="" />
        </div>
    </section>
    </>
  );
}