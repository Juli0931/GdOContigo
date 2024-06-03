import { HistoryPay, NavBar } from "../../components/index";
import "./HistoryUser.css";

export function HistoryUser() {
  const data = [
    {
      id: 1,
      mesFacturado: "Facturación mayo",
      periodoInicio: "15 Abril 2024",
      periodoFin: "15 Mayo 2024",
      tuConsumo: "50m³",
      balance: "+25%",
      estadoFactura: "Pago pendiente",
    },
    {
      id: 2,
      mesFacturado: "Facturación abril",
      periodoInicio: "15 Marzo 2024",
      periodoFin: "15 Abril 2024",
      tuConsumo: "32m³",
      balance: "+10%",
      estadoFactura: "Pago en mora",
    },
    {
      id: 3,
      mesFacturado: "Facturación marzo",
      periodoInicio: "15 Febrero 2024",
      periodoFin: "15 Marzo 2024",
      tuConsumo: "20m³",
      balance: "-25%",
      estadoFactura: "Pago realizado",
    },
    {
      id: 4,
      mesFacturado: "Facturación febrero",
      periodoInicio: "15 Enero 2024",
      periodoFin: "15 Febrero 2024",
      tuConsumo: "30m³",
      balance: "+13%",
      estadoFactura: "Pago realizado",
    },
    {
      id: 5,
      mesFacturado: "Facturación enero",
      periodoInicio: "15 Diciembre 2023",
      periodoFin: "15 Enero 2024",
      tuConsumo: "20m³",
      balance: "-19%",
      estadoFactura: "Pago realizado",
    },
    {
      id: 6,
      mesFacturado: "Facturación diciembre",
      periodoInicio: "15 Noviembre 2023",
      periodoFin: "15 Diciembre 2024",
      tuConsumo: "30m³",
      balance: "+14%",
      estadoFactura: "Pago realizado",
    }
  ];

  return (
    <>
      <NavBar />
      <div className="Container">
        <h2>¡Hola, cliente GdO!</h2>
        <h2 className="Saludo">Nos encanta tenerte de nuevo</h2>
        <div className="SelectorTable">
          <button className="PagosBtn">Historial de facturación</button>
          <button className="RetosBtn">Mis retos</button>
        </div>
        <HistoryPay data={data} />
      </div>
    </>
  );
}
