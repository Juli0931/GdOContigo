import "./HistorySection.css";
import {Filter} from "../index"
export function HistorySection() {
  // return (
  //   <>
  //     <h1>01 ⎯⎯⎯</h1>
  //     <div className="contenedor">
  //       <div className="imagen-grande">
  //         <img src="src\assets\History1.png" alt="Imagen Grande" />
  //       </div>
  //       <div className="contenido">
  //         <div className="texto">
  //           <p className="text1">Así celebramos</p>
  //           <p className="text2">25 años de operaciones</p>
  //           <img className="line" src="src\assets\Line.png" alt="linea" />
  //           <p className="text3">Y la historia continúa...</p>
  //         </div>
  //         <div className="imagen-pequeña">
  //           <img src="src\assets\History2.png" alt="Imagen Pequeña 1" />
  //         </div>
  //         <div className="imagen-pequeña">
  //           <img src="src\assets\History3.png" alt="Imagen Pequeña 2" />
  //         </div>
  //         <button>Conoce más sobre nuestra historia</button>
  //       </div>
  //     </div>
  //   </>
  // );
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
    </div>
  );
}
