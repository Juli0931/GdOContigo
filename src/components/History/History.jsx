import "./History.css";
export function History() {
  return (
    <>
    <h1>01 ⎯⎯⎯</h1>
    <div className="contenedor">
      <div className="imagen-grande">
        <img src= "src\assets\History1.png" alt="Imagen Grande" />
      </div>
      <div className="contenido">
        <div className="texto">
            <p className="text1">Así celebramos</p> 
            <p className="text2">25 años de operaciones</p>
            <img className="line" src="src\assets\Line.png" alt="linea" />
             <p className="text3">Y la historia continúa...</p>
        </div>
        <div className="imagen-pequeña">
          <img src="src\assets\History2.png" alt="Imagen Pequeña 1" />
        </div>
        <div className="imagen-pequeña">
          <img src="src\assets\History3.png" alt="Imagen Pequeña 2" />
        </div>
        <button>Conoce más sobre nuestra historia</button>
      </div>
    </div>
    </>
  );
}