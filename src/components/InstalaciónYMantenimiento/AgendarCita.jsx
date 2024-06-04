import { Link } from 'react-router-dom';
import agendarLogo from "../../assets/agendarLogo.png";
import agendarIcon1 from "../../assets/agendarIcon1.png";
import agendarIcon2 from "../../assets/agendarIcon2.png";
import agendarIcon3 from "../../assets/agendarIcon3.png";
import agendarIcon4 from "../../assets/agendarIcon4.png";

import "./AgendarCita.css";

const Texts = ({sourceIcon, lineText}) =>{
    return(
        <>
            <div className="text">
                <img src={sourceIcon} ></img>
                <p>{lineText}</p>
            </div>
        </>
    )
}
export function AgendarCita() {
  return (
    <>
    <section className="agendarContainer">
        <div className="agendarHeader">
            <img className="agendarLogo" src={agendarLogo} alt="" />
            <h1 className="agendarTitulo">Agenda tus citas</h1>
            <h3 className="agendarSubTitulo">Aquí podrás:</h3>
        </div>
        <div className='textsContainer'>
            <Texts sourceIcon={agendarIcon1} lineText={<>Reserva tu cita para revisión de daños, revisión periódica o cambio de contador.</>} />
            <Texts sourceIcon={agendarIcon2} lineText={<>Modificar o cancelar tu reserva facilmente.</>} /> 
            <Texts sourceIcon={agendarIcon3} lineText={<>Recibir información de tu cita por mensaje de texto.</>} /> 
            <Texts sourceIcon={agendarIcon4} lineText={<>Consultar detalles del servicio solicitado.</>} /> 
        </div>
        <div className='agendarButtons'>
            <button className='agendar ver'><Link to="/Ver_o_Modificar">Ver o modificar cita</Link></button>
            <button className='agendar nueva'><Link to="/Nueva_Cita">Nueva cita</Link></button>
        </div>
        <p className='seguimiento'>Seguimiento de cita activa</p>
    </section>
    </>
  );
}
