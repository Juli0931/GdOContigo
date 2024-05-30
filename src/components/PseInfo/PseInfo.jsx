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
    <section className="leftSection">
    <div className="indicatorDiv">
    <Indicator number={<>1</>} classNameText={"indicator"}/>
    <div class="linea-punteada"></div>
    <Indicator number={<>2</>} classNameText={"indicator"}/>
    <div class="linea-punteada"></div>
    <Indicator number={<>3</>} classNameText={"indicatorVacio"}/>
    </div>
    <h3 className="textito">Antes de realizar su pago, favor verificar la siguiente información:</h3>

    <div>
        <InfoDiv nameInfo={<>Número de factura:</>} infoText={<>2055888</>}/>
        <InfoDiv nameInfo={<>Concepto:</>} infoText={<>XXXXXXX</>}/>
        <InfoDiv nameInfo={<>Valor total a pagar:</>} infoText={<>$47.500</>}/>
        <InfoDiv nameInfo={<>Total IVA:</>} infoText={<>0</>}/>
        <InfoDiv nameInfo={<>Fecha de vencimiento de la factura:</>} infoText={<>27/12/24</>}/>
        <InfoDiv nameInfo={<>Correo electrónico:</>} infoText={<>GDO@gmail.com</>}/>
    </div>
    <h5 className="textitoH5">· Ésta transacción está sujeta a verificación</h5>
    </section>
    <section className="rightSection">
        <img src={pseLogo} alt="" />
        <div className="optionInput">
            <label htmlFor="">TIPO CLIENTE</label>
            <select name="Persona" id="">
                <option value="">Persona</option>
                <option value="">Empresa</option>
            </select>
        </div>
        <select name="A continuación seleccione un banco" id="" className="bankSelect">
            <option value="">Banco Agrario de Colombia</option>
            <option value="">Banco AV Villas</option>
            <option value="">Banco BBVA</option>
            <option value="">Banco BCSC</option>
            <option value="">Banco Citibank</option>
            <option value="">Banco Davivienda</option>
            <option value="">Banco de Bogotá</option>
            <option value="">Banco de Occidente</option>
            <option value="">Banco Falabella</option>
        </select>
        <button className="continueButton2">Continuar</button>
    </section>
    </>
  );
}
