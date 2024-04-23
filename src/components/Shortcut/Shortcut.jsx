import { FaAngleUp } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { TiWarningOutline } from "react-icons/ti";
import { FiHelpCircle } from "react-icons/fi";
import BrillaLogo from "../../assets/BrillaLogo.png";

import "./Shortcut.css";

const Card = ({ icon, text }) => {
  return (
    <div className="card-container">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
      <div className="expand-icon">
        <FaAngleUp />
      </div>
    </div>
  );
};

export function Shortcut() {
  return (
    <div className="shortcut-container">
      <Card icon={<HiOutlineCurrencyDollar />} text={<><strong>Paga</strong> tu factura</>} />
      <Card icon={<LuFiles />} text={<><strong>Saca el duplicado<br /></strong> de tu factura</>} />
      <Card icon={<TiWarningOutline />} text={<><strong>Reporta</strong> un daño</>} />
      <Card icon={<img src={BrillaLogo} alt="Brilla" />} text={<div className="brilla-text"><strong>Conecta</strong> con Brilla</div>} />
      <Card icon={<FiHelpCircle />} text={<><strong>¿Necesitas ayuda?</strong> ¡Escríbenos!</>} />
    </div>
  );
}
