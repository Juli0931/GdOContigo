import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { TiWarningOutline } from "react-icons/ti"; /* warning ya no se necesita */
import { FiHelpCircle } from "react-icons/fi";
import BrillaLogoB from "../../assets/BrillaLogoB.png";
import BrillaLogoW from "../../assets/BrillaLogoW.png";
import BrillaResponsive from "../../assets/BrillaResponsive.svg";

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
      <Card icon={<HiOutlineCurrencyDollar className='w-7 md:w-12' />} text={<><strong>Paga</strong> tu factura</>}/>
      <Card icon={<LuFiles />} text={<><strong>Saca el duplicado<br /></strong>{" "}de tu factura</>}/>
      <Card icon={<FaRegUser />} text={<><strong>Soy cliente GdO</strong></>}/>

      <div className="card-container" onMouseEnter={() => setBrillaLogo(BrillaLogoW)} onMouseLeave={() => setBrillaLogo(BrillaLogoB)}>
        <div className="icon">
          <img src={brillaLogo} alt="Brilla" className="brillaNoResponsive"/>
          <img src={BrillaResponsive} alt="Brilla" className="brillaResponsive"/>
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
