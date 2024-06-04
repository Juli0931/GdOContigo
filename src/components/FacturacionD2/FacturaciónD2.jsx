import React, { useState } from 'react';
import Modal from 'react-modal';
import Indicador from "../../assets/FacturacionImg2.png";
import popup from "../../assets/PopUp.png";

import "./FacturacionD2.css";

Modal.setAppElement('#app');

const Labels = ({texto, labelClassname, placeholder}) =>{
    return(
        <>
            <div className="inputs">
                <label className={labelClassname} htmlFor="">{texto}</label>
                <input className="facturacionInput2" type="text" placeholder={placeholder}/>
            </div>
        </>
    )
}
export function FacturacionD2() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
  return (
    <>
        <h1 className="facturacionTitulo2">Facturación digital</h1>
    <section className="facturacion2Container">
        <img className="indicador2" src={Indicador} alt="" />
        <form className="facturacionForm2" action="">
            <Labels texto={<>Nombre</>} placeholder="Ej: Karol"/>
            <Labels texto={<>Apellido</>} placeholder="Ej: Fuentes"/> 
            <Labels texto={<>Celular</>} placeholder="Ej: 3188828256"/> 
            <Labels texto={<>Correo Electrónico</>} placeholder="Ej: ejemplo@gmail.com"/> 
            <div className="terms dos">
                <input type="checkbox" id="terms" name="terms" />
                    <label className="termsLabel" htmlFor="terms">
                        Acepto las <span className="highlight">políticas de protección de datos personales</span> para el envío de la facturación digital
                    </label>
            </div>
            <label htmlFor="" className="notificacion">¿Cómo desea ser notificado?</label>
            <div className="formRadio">
                <label htmlFor=""><input type="radio" name="notificacion" />Correo electrónico</label> 
                <label htmlFor=""><input type="radio" name="notificacion"/>Mensajes de texto</label>
            </div>
            <button className="continue" onClick={openModal}>Registrar factura</button>
        </form>
    </section>
    <Modal
        isOpen={modalIsOpen}
         onRequestClose={closeModal}
        contentLabel="Registro exitoso"
        className="modalContent"
        overlayClassName="modalOverlay"
    >
        <img className="popup" src={popup} onClick={closeModal} alt="" />
    </Modal>
    </>
  );
}