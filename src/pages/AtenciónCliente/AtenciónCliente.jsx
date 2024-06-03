import { useState } from "react";
import Swal from "sweetalert2";
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

  const handleSubmit = () => {
    const {
      nombreCompleto,
      cedula,
      telefono,
      email,
      direccion,
      ciudad,
      titulo,
      descripcion,
      tipoPeticion,
    } = formData;

    if (
      nombreCompleto &&
      cedula &&
      telefono &&
      email &&
      direccion &&
      ciudad &&
      titulo &&
      descripcion &&
      tipoPeticion
    ) {
      Swal.fire({
        title: "Solicitud creada exitosamente",
        html: `
          <p>Tu reclamo ha sido recibido y registrado correctamente. 
          A continuación, se presentan los detalles de tu solicitud:</p>
  
          <div>
            <p>Tipo de petición:<b> ${formData.tipoPeticion} </b></p>
            <p>Número de cédula:<b> ${formData.cedula} </b></p>
            <p>Dirección de residencia:<b> ${formData.direccion} </b></p>
          </div>
      
          <p>Nuestro equipo de atención al cliente revisará tu caso y se pondrá en 
          contacto contigo en un plazo de <b>5 días hábiles</b> para proporcionar una solución.</p>
        `,
        icon: "success",
        showCancelButton: true,
        cancelButtonText: "Corregir datos",
        cancelButtonColor: "#A1A7C4",
        confirmButtonText: "Confirmar",
        confirmButtonColor: "#006EB5",
      }).then((result) => {
        if (result.isConfirmed) {
          setFormData({
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
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos requeridos.",
        icon: "error",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#006EB5",
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="BannerPQR">
        <img src={BannerPQR} alt="Banner de quejas, peticiones y reclamos" />
      </div>

      <div className="SelectorPQR">
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

      <div className="ContainerPQR">
        {view === "crear" && (
          <form>
            <h2> Crear una nueva petición</h2>
            <p>
              Inicia una nueva solicitud, queja o reclamo proporcionando tus
              datos y detalles del inconveniente para que podamos ayudarte de
              manera eficiente.
            </p>
            <h3>
              <b>Datos personales</b>
            </h3>
            <div>
              <label className="LabelTxt is-required">Nombre completo</label>
              <input
                className="SelectorInput"
                type="text"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">Número de cédula</label>
              <input
                className="SelectorInput"
                type="number"
                name="cedula"
                value={formData.cedula}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">Número de teléfono</label>
              <input
                className="SelectorInput"
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">Correo electrónico</label>
              <input
                className="SelectorInput"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">
                Dirección de residencia
              </label>
              <input
                className="SelectorInput"
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">Ciudad</label>
              <input
                className="SelectorInput"
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
              />
            </div>
            <h3>
              <b>Detalles de la petición</b>
            </h3>
            <div>
              <label className="LabelTxt is-required">Tipo de petición</label>
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
              <label className="LabelTxt is-required">Asunto</label>
              <input
                className="SelectorInput"
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="LabelTxt is-required">Descripción</label>
              <textarea
                className="SelectorInput"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
              />
            </div>
            <h4>Adjuntar documentos (opcional)</h4>
            <div className="file-select" id="archivos">
              <label className="LabelTxt">Adjuntar documentos (opcional)</label>
              <input
                className="SelectorInputFile"
                type="file"
                name="archivos"
                onChange={handleFileChange}
              />
            </div>
            <button className="SubmitBtn" type="button" onClick={handleSubmit}>
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
              <label className="LabelTxt">Ingresa el número de petición o cédula</label>
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
