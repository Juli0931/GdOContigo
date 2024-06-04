import { Link } from 'react-router-dom';
import { NavBar} from "../../components";
import React, { useState } from 'react';
import Modal from 'react-modal';
import agendarLogo from "../../assets/agendarLogo.png";
import popup2 from "../../assets/PopUp2.png";

import "./estilos/Datos.css"

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
export function Datos() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
  return (
    <div className="agendarDiv">
        <NavBar></NavBar>
            <section className="agendarContainer">
                <div className="agendarHeader">
                    <img className="agendarLogo" src={agendarLogo} alt="" />
                    <h1 className="modTitulo datos">Ingresa tus datos</h1>
                    <p className='horaText'>Ingresa tus datos para completar la reserva de tu cita:</p>
                </div>
            <form className="Form">
                <Labels texto={<>Número de documento</>} placeholder="Ej: 25698789"/>
                <Labels texto={<>Número celular</>} placeholder="Ej: 3000020322"/> 

                <div className="terminos">
                    <input type="checkbox" className="check" name="terms" />
                        <label className="seguimiento" htmlFor="terms">
                            Acepto términos y condiciones                        
                        </label>
                </div>
                <button className="regresar" onClick={openModal}>
                    Continuar
                </button>
            </form>
        </section>
    <Modal
        isOpen={modalIsOpen}
         onRequestClose={closeModal}
        contentLabel="Registro exitoso"
        className="modalContent"
        overlayClassName="modalOverlay"
    >
        <img className="popup" src={popup2} onClick={closeModal} alt="" />
    </Modal>
    </div>
  );
}