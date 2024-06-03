import { Labels, Indicator } from "../Forms/Forms";
import { NavBar } from "../NavBar/NavBar";
import FondoPagos from '../../assets/FondoPagos.jpg'
import "./Retos.css";

import { Link } from "react-router-dom";

const CardRetoProgreso = ({url, title, progreso}) =>{
    return(
        <>
            <div className="cardRetoContainer">
                <div className="imgContainer">
                <img src={url} alt="" />
                </div>
                <h4>{title}</h4>
                <progress max="100" value={progreso}></progress>
                <h5>Progreso del reto {progreso}%</h5>
                <button>Ver más información</button>
            </div>
        </>
    )
}

const CardReto = ({url, title}) =>{
    return(
        <>
            <div>
                <img src={url} alt="" />
                <h4>{title}</h4>
                <button>Ver más información</button>
            </div>
        </>
    )
}

export function Retos(){
  return (
    <>
        <div className="Container">
        <h2>¡Hola, cliente GdO!</h2>
        <h2 className="Saludo">Nos encanta tenerte de nuevo</h2>
        <div className="SelectorTable">
          <button className="PagosBtn">Historial de facturación</button>
          <Link to="/MisRetos">
          <button className="RetosBtn">Mis retos</button>
          </Link>
        </div>
        <div className="cardsContainer">
            <h2>Mis retos en progreso</h2>
            <div>
                <CardRetoProgreso url={FondoPagos} title={<>Apagar la llama</>} progreso={"50"}/>
            </div>
        </div>
        </div>
    </>
  );
}
