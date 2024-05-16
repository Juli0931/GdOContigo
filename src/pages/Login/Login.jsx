import { NavBar } from "../../components";
import BannerLogin from "../../assets/BannerLogin.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {
  const [selectedOption, setSelectedOption] = useState("cedula");
  const [placeholderText, setPlaceholderText] = useState("Ej: 1082214063");
  const [labelText, setLabelText] = useState("Ingresa con tu número de cédula");
  const [inputValue, setInputValue] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "cedula") {
      setPlaceholderText("Ej: 1082214063");
      setLabelText("Ingresa con tu número de cédula");
    } else if (option === "contrato") {
      setPlaceholderText("Ej: 153508153");
      setLabelText("Ingresa con tu número de contrato");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="LoginContainer">
        <div className="FormContainer">
          <div className="FormElement">
            <h2 className="WelcomeTxt">¡Bienvenido de vuelta!</h2>
            <h3 className="InfoTxt">
              Accede a tu cuenta y empieza a disfrutar de todas las
              funcionalidades personalizadas que GdO tiene para ti.
            </h3>
            <form>
              <div className="Selector">
                <button
                  type="button"
                  onClick={() => handleOptionChange("cedula")}
                  className={
                    selectedOption === "cedula"
                      ? "CedulaBtn Selected"
                      : "CedulaBtn"
                  }
                >
                  No. Cédula
                </button>
                <button
                  type="button"
                  onClick={() => handleOptionChange("contrato")}
                  className={
                    selectedOption === "contrato"
                      ? "ContratoBtn Selected"
                      : "ContratoBtn"
                  }
                >
                  No. Contrato
                </button>
              </div>
              <div>
                <label className="LabelTxt">{labelText}</label>
                <input
                  className="SelectorInput"
                  type="text"
                  placeholder={placeholderText}
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <h3 className="HelpTxt">
                <span>¿Necesitas ayuda?</span> Mira nuestra guía
              </h3>

              <Link to="/HistoryUser">
                <button type="button" className="SubmitBtn">
                  Ingresar
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="BannerContainer">
          <img src={BannerLogin} alt="banner" />
        </div>
      </div>
    </>
  );
}
