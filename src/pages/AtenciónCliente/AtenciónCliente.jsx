import { useState } from "react";
import { NavBar, Footer } from "../../components/index";
import BannerPQR from "../../assets/BannerPQR.png";
import "./AtenciónCliente.css";

export function AtenciónCliente() {
  const [view, setView] = useState("crear");
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    telefono: "",
    email: "",
    direccion: "",
    ciudad: "",
    titulo: "",
    descripcion: "",
    archivos: null,
    tipoPeticion: "",
  });
  const [consultaId, setConsultaId] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      archivos: e.target.files[0],
    });
  };

  const handleConsultaChange = (e) => {
    setConsultaId(e.target.value);
  };

  return (
    <>
      <NavBar />

      <div className="BannerPQR">
        <img src={BannerPQR} alt="Banner de quejas, peticiones y reclamos" />
      </div>

      <div className="Selector">
        <button
          type="button"
          onClick={() => setView("crear")}
          className={view === "crear" ? "CrearBtn Selected" : "CrearBtn"}
        >
          Crear nueva petición
        </button>
        <button
          type="button"
          onClick={() => setView("consultar")}
          className={
            view === "consultar" ? "ConsultarBtn Selected" : "ConsultarBtn"
          }
        >
          Consultar estado de petición
        </button>
      </div>

      <div className="Container">
        {view === "crear" && (
          <form>
            <h2> Crear una nueva petición</h2>
            <p>
              Inicia una nueva solicitud, queja o reclamo proporcionando tus
              datos y detalles del inconveniente para que podamos ayudarte de
              manera eficiente.
            </p>
            <h3>Datos personales</h3>
            <div>
              <label className="LabelTxt">Nombre completo</label>
              <input
                className="SelectorInput"
                type="text"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Número de cédula</label>
              <input
                className="SelectorInput"
                type="number"
                name="cedula"
                value={formData.cedula}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Número de teléfono</label>
              <input
                className="SelectorInput"
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Correo electrónico</label>
              <input
                className="SelectorInput"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Dirección de residencia</label>
              <input
                className="SelectorInput"
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Ciudad</label>
              <input
                className="SelectorInput"
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
              />
            </div>
            <h3>Detalles de la petición</h3>
            <div>
              <label className="LabelTxt">Tipo de petición</label>
              <select
                className="SelectorInput"
                name="tipoPeticion"
                value={formData.tipoPeticion}
                onChange={handleInputChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="requerimiento">Requerimiento</option>
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
              </select>
            </div>
            <div>
              <label className="LabelTxt">Asunto</label>
              <input
                className="SelectorInput"
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Descripción</label>
              <textarea
                className="SelectorInput"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt">Adjuntar documentos (opcional)</label>
              <input
                className="SelectorInputFile"
                type="file"
                name="archivos"
                onChange={handleFileChange}
              />
            </div>
            <button className="SubmitBtn" type="button">
              Enviar
            </button>
          </form>
        )}

        {view === "consultar" && (
          <form>
            <h2> Consulta el estado de tu petición</h2>
            <p>
              Revisa el progreso y estado de tus solicitudes anteriores usando
              tu número de petición o número de cedula.
            </p>
            <div>
              <label className="LabelTxt">Número de petición</label>
              <input
                className="SelectorInput"
                type="number"
                value={consultaId}
                onChange={handleConsultaChange}
              />
            </div>
            <button className="SubmitBtn" type="button">
              Consultar
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
