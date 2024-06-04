import { NavBar, Footer } from "../../components";
import "./RetosAmbiente.css";
import bannerRetos from '../../assets/bannerRetos.svg'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.png'
import Card6 from '../../assets/card6.png'
import Card7 from '../../assets/card7.png'
import Card8 from '../../assets/card8.png'
import Card9 from '../../assets/card9.png'

import { CardReto } from "../../components";

export function RetosAmbiente() {
  return (
    <>
        <NavBar></NavBar>
        <section className="">
        <div className="bannerRetosContainer"><img src={bannerRetos} alt="" /></div>
        <div className="optionsDiv">
            <div className="todosOption"><h3><strong>Todos</strong></h3></div>
            <h4>Hogar</h4>
            <h4>Agua</h4>
            <h4>Energía</h4>
            <h4>Transporte</h4>
            <h4>Sostenibilidad</h4>
        </div>
        <div className="cardsContainerBody">
            <div className="cardsProgressContainer">
                <CardReto url={Card1} title={<>Ahorro de agua inteligente</>}/>
                <CardReto url={Card2} title={<>Iluminación eficiente</>}/>
                <CardReto url={Card3} title={<>Reciclaje responsable</>}/>
            </div>
            <div className="cardsProgressContainer">
                <CardReto url={Card4} title={<>Ahorro de agua inteligente</>}/>
                <CardReto url={Card5} title={<>Iluminación eficiente</>}/>
                <CardReto url={Card6} title={<>Reciclaje responsable</>}/>
            </div>
            <div className="cardsProgressContainer">
                <CardReto url={Card7} title={<>Ahorro de agua inteligente</>}/>
                <CardReto url={Card8} title={<>Iluminación eficiente</>}/>
                <CardReto url={Card9} title={<>Reciclaje responsable</>}/>
            </div>
        </div>
        </section>
        <Footer />
    </>
  );
}