import { useState, useEffect } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import "./Questions.css";

const frecuentlyQ = (question) => {
    return (
        <div className="card-container">
            <IoIosHelpCircleOutline />
            <p>{question}</p>
            <FaArrowRightLong />
        </div>
      
    );
  };

export function Questions() {
  return (
    <>
    <section>
        <h2>Respondemos a tus preguntas</h2>
        <section>
            <img src="" alt="" />
            <button></button>
        </section>
        <section>
            <h4>Lo más consultado</h4>
            <frecuentlyQ question={<>¿Qué debo hacer en caso de detextar un<br/>olor a gas en mi casa o negocio?</>}/>

        </section>
    </section>
    </>
  );
}
