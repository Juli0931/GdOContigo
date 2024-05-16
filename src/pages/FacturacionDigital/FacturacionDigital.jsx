import { FacturacionD, NavBar, Footer } from "../../components";
import "./FacturacionDigital.css";

export function FacturacionDigital() {
  return (
    <div className="FacturacionDiv">
        <NavBar></NavBar>
        <FacturacionD></FacturacionD>
        <Footer></Footer>
    </div>
  );
}