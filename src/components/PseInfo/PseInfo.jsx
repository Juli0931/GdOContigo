import { Labels, Indicator } from "../Forms/Forms";
import pseLogo from '../../assets/pseLogo.svg'
import "./PseInfo.css";

const InfoDiv = ({nameInfo, infoText}) =>{
    return(
        <div className="infoDiv">
            <h2>{nameInfo}</h2>
            <h2>{infoText}</h2>
        </div>
    )
}

export function PseInfo() {
  return (
    <>
    <section>
    <div className="indicatorDiv">
    <Indicator number={<>1</>} classNameText={"indicator"}/>
    <div class="linea-punteada"></div>
    <Indicator number={<>2</>} classNameText={"indicator"}/>
    <div class="linea-punteada"></div>
    <Indicator number={<>3</>} classNameText={"indicatorVacio"}/>
    </div>
    <h3>Antes de realizar su pago, favor verificar la siguiente información:</h3>

    <div>
        <InfoDiv nameInfo={<>Número de factura:</>} infoText={<>2055888</>}/>
        <InfoDiv nameInfo={<>Concepto:</>} infoText={<>XXXXXXX</>}/>
        <InfoDiv nameInfo={<>Valor total a pagar:</>} infoText={<>$47.500</>}/>
        <InfoDiv nameInfo={<>Total IVA:</>} infoText={<>0</>}/>
        <InfoDiv nameInfo={<>Fecha de vencimiento de la factura:</>} infoText={<>27/12/24</>}/>
        <InfoDiv nameInfo={<>Correo electrónico:</>} infoText={<>GDO@gmail.com</>}/>
    </div>
    <h5>Ésta transacción está sujeta a verificación</h5>
    </section>
    <section>
        <img src={pseLogo} alt="" />
        <div>
            <label htmlFor="">TIPO CLIENTE</label>
            <select name="Persona" id="">
                <option value="">Persona</option>
                <option value="">Persona</option>
            </select>
        </div>
        <select name="A continuación seleccione un banco" id="">
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
            <option value="">Banco agrario de colombia</option>
        </select>
        <button>Continuar</button>
    </section>
    </>
  );
}
