import { SlOptions } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import "./HistoryPay.css";

export function HistoryPay({ data }) {
  return (
    <div className="TableHistory">
      <table>
        <thead>
          <tr>
            <th>Mes facturado</th>
            <th>Periodo facturado</th>
            <th>Tu consumo</th>
            <th>Estado de factura</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            const estadoColores = {
              "Pago pendiente": "#9F821F",
              "Pago en mora": "#8752A1",
              "Pago realizado": "#079DD9",
            };

            const balanceColor =
              e.balance.charAt(0) === "-" ? "#FF705C" : "#4DE753";

            const estadoBackgrounds = {
              "Pago pendiente": "#FFECAD",
              "Pago en mora": "#EFCFFF",
              "Pago realizado": "#B9F3FF",
            };

            return (
              <tr key={e.id}>
                <td className="MesTxt">{e.mesFacturado}</td>
                <td className="PeriodoTxt">
                  <div className="LinePeriod">
                    <CiCalendar className="CalendarIcon"/>
                    {e.periodoInicio}
                  </div>
                  <div className="LinePeriod">
                    <CiCalendar className="CalendarIcon"/>
                    {e.periodoFin}
                  </div>
                </td>
                <td>
                  {e.tuConsumo}{" "}
                  <span className="Bold" style={{ color: balanceColor }}>
                    {e.balance}
                  </span>
                </td>
                <td className="EstadoFactura">
                  <span
                    className="EstadoText"
                    style={{
                      backgroundColor: estadoBackgrounds[e.estadoFactura],
                      color: estadoColores[e.estadoFactura],
                    }}
                  >
                    {e.estadoFactura}
                  </span>
                  <SlOptions className="OptionsIcon" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
