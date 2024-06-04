import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.png'
import Card6 from '../../assets/card6.png'
import Card7 from '../../assets/card7.png'
import Card8 from '../../assets/card8.png'
import Card9 from '../../assets/card9.png'

import "./Retos.css";

import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const CardRetoProgreso = ({url, title, progreso}) =>{
    return(
        <>
            <div className="cardRetoContainer">
                <div className="imgContainer">
                    <img src={url} alt="" /> 
                    <div className="infoCardDiv">
                    <h3>{title}</h3>
                    <div className="progressContainer">
                        <div className="progressBar" style={{width: `${progreso}%`}}></div>
                    </div>
                    <h6>Progreso del reto <strong>{progreso}%</strong></h6>
                </div>
            </div>
                <div className="divCardButton">
                    <button className="cardButton">Ver más información</button>
                </div>
            </div>
        </>
    )
}

export const CardReto = ({url, title}) =>{
    return(
        <>
            <div className="cardRetoContainer">
            <div className="imgContainer">
                <img src={url} alt="" />
            
            <div className="infoCardDiv">
                    <h3>{title}</h3>
            </div>
            </div>
            <div className="divCardButton">
                    <button className="cardButton">Ver más información</button>
                </div>
            </div>
        </>
    )
}

export function Retos(){
  return (
    <>
        <div className="ContainerRetos">
        <h2>¡Hola, cliente GdO!</h2>
        <h2 className="Saludo">Nos encanta tenerte de nuevo</h2>
        <div className="SelectorTableR">
            <Link to={"/HistoryUser"}>
          <button className="PagosBtn2">Historial de facturación</button>
          </Link>
          <button className="RetosBtn2">Mis retos</button>
        </div>
        <div className="cardsContainer">
            <h2 className='RetosTitulos'>Mis retos en progreso</h2>
            <div className="cardsProgressContainer">
                <CardRetoProgreso url={Card1} title={<>Reto de temperaturas más bajas</>} progreso={"50"}/>
                <CardRetoProgreso url={Card2} title={<>Apagar la llama</>} progreso={"60"}/>
                <CardRetoProgreso url={Card3} title={<>Transporte verde</>} progreso={"30"}/>
            </div>
            <h2 className='RetosTitulos'>También te pueden interesar estos retos</h2>
            <div className="cardsProgressContainer">
                <CardReto url={Card4} title={<>Ahorro de agua inteligente</>}/>
                <CardReto url={Card5} title={<>Iluminación eficiente</>}/>
                <CardReto url={Card6} title={<>Reciclaje responsable</>}/>
                <CardReto url={Card7} title={<>Apagón digital semanal</>}/>
                <CardReto url={Card8} title={<>Cocina eficiente</>}/>
                <CardReto url={Card9} title={<>Hogar sostenible</>}/>
            </div>
        </div>
        </div>
    </>
  );
}

