import { Link } from 'react-router-dom';
import { NavBar} from "../../components";
import agendarLogo from "../../assets/agendarLogo.png";
import flecha from "../../assets/flecha.png";

import "./estilos/NuevaCita.css"

const Cards = ({lineText, textName}) =>{
    return(
        <>
            <div className="card">
                <p className={textName}>{lineText}</p>
                <img  src={flecha}></img>
            </div>
        </>
    )
}

export function NuevaCita() {
  return (
    <div className="agendarDiv">
        <NavBar></NavBar>
        <section className="agendarContainer">
            <div className="agendarHeader">
                <img className="agendarLogo" src={agendarLogo} alt="" />
                <h1 className="modTitulo">Selecciona el tipo de servicio</h1>
            </div>
            <div className='cardsContainer'>
                <Link to="/Fecha_y_Hora"><Cards lineText={<>Servicios de mantenimiento, adecuaciones o reparaciones</>} /></Link>
                <Cards lineText={<>Revisión periódica</>} />
                <Cards lineText={<>Cambio de contador</>} />
            </div>
        </section>
    </div>
  );
}