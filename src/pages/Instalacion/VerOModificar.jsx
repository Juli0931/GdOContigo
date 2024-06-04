import { Link } from 'react-router-dom';
import { NavBar} from "../../components";
import agendarLogo from "../../assets/agendarLogo.png";
import misCitasImg from "../../assets/misCitasImg.png";
import verIcon1 from "../../assets/verIcon1.png";
import verIcon2 from "../../assets/verIcon2.png";

import "./estilos/VerOModificar.css"

const Texts = ({sourceIcon,iconName, lineText, textName}) =>{
    return(
        <>
            <div className="text modificar">
                <p className={textName}>{lineText}</p>
                <img className={iconName} src={sourceIcon} ></img>
            </div>
        </>
    )
}

export function VerOModificar() {
  return (
    <div className="agendarDiv">
        <NavBar></NavBar>
        <section className="agendarContainer">
                    <div className="agendarHeader">
                        <img className="agendarLogo" src={agendarLogo} alt="" />
                        <h1 className="modTitulo">Mis citas</h1>
                        <Link to="/Nueva_Cita"> <img className="nuevaCita" src={misCitasImg} alt="" /></Link>
                    </div>
                    <div className="citasSubTitulo">
                        <p>Citas reservadas</p>
                        <div className="citas">
                            <Texts iconName="vericon1" sourceIcon={verIcon1} lineText={<>Miércoles 22 de Mayo <br />09:00 am</>} />
                            <Texts textName="vertext2" sourceIcon={verIcon2} lineText={<>Revisión por daños</>} />
                        </div>
                    </div>
                    <button className='regresar'><Link to="/Instalacion_y_mantenimiento">Regresar</Link></button>
                </section>
    </div>
  );
}