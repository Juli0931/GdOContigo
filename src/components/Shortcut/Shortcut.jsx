import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { TiWarningOutline } from "react-icons/ti";
import { FiHelpCircle } from "react-icons/fi";
import BrillaLogoB from "../../assets/BrillaLogoB.png";
import BrillaLogoW from "../../assets/BrillaLogoW.png";

import "./Shortcut.css";

const Card = ({ icon, text }) => {
  return (
    <div className="card-container">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
      <div className="expand-icon">
        <MdArrowOutward />
      </div>
    </div>
  );
};

export function Shortcut() {
  const [brillaLogo, setBrillaLogo] = useState(BrillaLogoB);

  return (
    <div className="section-container">
      <h2>Accesos rápidos</h2>
      <div className="shortcut-container">
      <Card icon={<HiOutlineCurrencyDollar />} text={<><strong>Paga</strong> tu factura</>}/>
      <Card icon={<LuFiles />} text={<><strong>Saca el duplicado<br /></strong>{" "}de tu factura</>}/>
      <Card icon={<TiWarningOutline />} text={<><strong>Reporta</strong> un daño</>}/>

      <div className="card-container" onMouseEnter={() => setBrillaLogo(BrillaLogoW)} onMouseLeave={() => setBrillaLogo(BrillaLogoB)}>
        <div className="icon">
          <img src={brillaLogo} alt="Brilla" />
        </div>
        <div className="text brilla-text">
          <strong>Conecta</strong> con Brilla
        </div>
        <div className="expand-icon">
          <MdArrowOutward />
        </div>
      </div>

      <Card icon={<FiHelpCircle />} text={<><strong>¿Necesitas ayuda?</strong> ¡Escríbenos!</>}/>
    </div>
    </div>
  );
}
