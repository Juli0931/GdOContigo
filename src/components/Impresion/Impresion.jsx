import { Indicator } from "../Forms/Forms";
import { InfoDiv } from "../PseInfo/PseInfo";
import "./Impresion.css";

import { Link } from "react-router-dom";


export function Impresion() {
  return (
    <>
    <section className="LeftSect">
    <div className="indicatorDiv">
        <Indicator number={1} classNameText={"indicator"}/>
        <div className="linea-punteada"></div>
        <Indicator number={2} classNameText={"indicator"}/>
        <div className="linea-punteada"></div>
        <Indicator number={3} classNameText={"indicator"}/>
    </div>
    <div className="textInfo">
    <div className="numberTextInfo">
        <h4>Si requiere más información acerca e la transacción, por favor contactarse</h4>
        <h4>al número telefónico: 3165697633</h4>
    </div>
    <div className="transaccionDiv">
        <h4>Transacción Aprobada</h4>
    </div>
    </div>
    <div className="LeftInfo">
        <div className="InfoTitles"><h4>Datos de la empresa</h4></div>
        <InfoDiv nameInfo={<>Empresa:</>} infoText={<>XXXXXX</>}/>
        <InfoDiv nameInfo={<>Dirección:</>} infoText={<>$47.500</>}/>
        <InfoDiv nameInfo={<>Telefóno:</>} infoText={<>0</>}/>
        <InfoDiv nameInfo={<>NIT:</>} infoText={<>27/12/24</>}/>

        <div className="InfoTitles"><h4>Datos del cliente</h4></div>
        <InfoDiv nameInfo={<>Correo electrónico:</>} infoText={<>GDO@gmail.com</>}/>
    </div>
    </section>

    <section className="RightSect">
    <div className="infoRight">
        <div className="InfoTitles"><h4>Datos de pago</h4></div>
        <InfoDiv nameInfo={<>No. Pago:</>} infoText={<>24566547</>}/>
        <InfoDiv nameInfo={<>Medio de pago:</>} infoText={<>Pagos ACH PSE</>}/>
        <InfoDiv nameInfo={<>Fecha de pago:</>} infoText={<>27/12/24</>}/>
        <InfoDiv nameInfo={<>Tipo de usuario:</>} infoText={<>27/12/24</>}/>
        <InfoDiv nameInfo={<>Ticket ID:</>} infoText={<>24566547</>}/>
        <InfoDiv nameInfo={<>Estado de transacción:</>} infoText={<>Transacción aprobada</>}/>
        <InfoDiv nameInfo={<>Banco:</>} infoText={<>BANCO DE BOGOTÁ</>}/>
        <InfoDiv nameInfo={<>NIT:</>} infoText={<>47.500</>}/>
    </div>
    <div className="buttonDiv">
        <h6>*Esta transacción está sujeta a verificación</h6>
        <button>Imprimir esta página</button>
    </div>
    </section>
    </>
  );
}
