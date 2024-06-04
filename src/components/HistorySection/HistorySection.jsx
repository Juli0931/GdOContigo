import "./HistorySection.css";
import {Filter} from "../index"
import EventosImg from '../../assets/eventosImg.svg'
import TipsImg from '../../assets/tipsImg.svg'
import NoticiasImg from '../../assets/noticiasImg.svg'
export function HistorySection() {

  return (
    <div className="HistorySection">
      <div className="header">
        <div className="left-align">Descubre lo último en GdO</div>
        <div className="right-align">
          <Filter></Filter>
        </div>
      </div>
      <div className="image-grid">
        <div className="image-container">
           
        </div>
        <div className="image-container">
          <img src="src\assets\grid1.png" alt="Imagen 1" className="gridImage1" />
          <button className="overlay-button1">Agendarme</button>
        </div>
        <div className="image-container">
          <img src="src\assets\grid2.png" alt="Imagen 2" className="gridImage2" />
          <button className="overlay-button2">Leer más</button>
        </div>
        <div className="image-container">
          <img src="src\assets\grid3.png" alt="Imagen 3" className="gridImage3" />
          <button className="overlay-button3">Leer más</button>
          <img src="src\assets\grid4.png" alt="Imagen 4" className="gridImage4" />
          <button className="overlay-button4">Agendarme</button>
        </div>
      </div>
      <div className="noticesDiv">
      <img src={EventosImg} alt="" className="gdoNotices"/>
      <img src={TipsImg} alt="" className="gdoNotices"/>
      <img src={NoticiasImg} alt="" className="gdoNotices"/>
      </div>
    </div>
  );
}
