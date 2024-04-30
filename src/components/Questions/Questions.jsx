import { useState, useEffect } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import questionsImg from "../../assets/questions.jpg";

import "./Questions.css";

const FrecuentlyQ = ({question}) => {
    return (
      <>
        <div className="divQuestion">
            <IoIosHelpCircleOutline className="helpIcon"/>
            <p>{question}</p>
            <FaArrowRightLong className="arrowIcon"/>
        </div>
      </>
      
    );
  };

export function Questions() {
  return (
    <>
    <section className="questionContainer">
        <h2>Respondemos a tus preguntas</h2>
        <section className="sectionQuestion">
          <section>
            <img src={questionsImg} alt="" />
            <button></button>
          </section>
        <section className="consultaSection">
          <h3>Lo más consultado</h3>
            <FrecuentlyQ question={<>¿Qué debo hacer en caso de detectar un<br></br>olor a gas en mi hogar o negocio?</>}/>
            <FrecuentlyQ question={<>¿Qué debo hacer si pierdo mi factura de gas?</>}/>
            <FrecuentlyQ question={<>¿Cuáles son los requisitos para solicitar un<br></br>servicio de conexión de gas natural en mi hogar?</>}/>
            <FrecuentlyQ question={<>¿Qué debo hacer es tengo problemas con mi medidor<br></br>de gas o experimento fluctuaciones en mi suministro?</>}/>
        </section>
    </section>
    <h3>Ver todas las preguntas frecuentes</h3>
    </section>
    </>
  );
}
