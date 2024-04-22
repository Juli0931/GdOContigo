import { FaAngleUp } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { TiWarningOutline } from "react-icons/ti";
import { LuHeartHandshake } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";

import "./Shortcut.css";

const Card = ({ icon, text }) => {
  return (
    <div className="card-container">
      <div className="content">
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
      </div>
      <div className="expand-icon">
        <FaAngleUp />
      </div>
    </div>
  );
};

export function Shortcut() {
  return (
    <div className="shortcut-container">
      <Card icon={<HiOutlineCurrencyDollar/>} text="Paga tu factura" />
      <Card icon={<LuFiles/>} text="Saca el duplicado de tu factura" />
      <Card icon={<TiWarningOutline/>} text="Reporta un daño" />
      <Card icon={<LuHeartHandshake/>} text="Conecta con Brilla" />
      <Card icon={<FiHelpCircle/>} text="¿Necesitas ayuda? ¡Escríbenos!" />
    </div>
  );
};