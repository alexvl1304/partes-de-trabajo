import { useNavigate, useParams } from "react-router-dom";
import type Trabajo from "../scripts/trabajo";
import DrawingCanvas from "../componentes/draw-canvas";
import ProcesarActualizarTrabajo from "../scripts/procesar-actualizar-trabajo";

export function DetallesTrabajo() {
    const { id } = useParams();
    const navigate = useNavigate();
    if (id == undefined) { navigate("user"); }

    let index = Number.parseInt(id!);

    const trabajos: Trabajo[] = [
        {
            nombre: "trab1",
            fechaInicio: new Date(),
            fechaFin: new Date(2026, 4, 20)
        },
        {
            nombre: "trab2",
            fechaInicio: null,
            fechaFin: null
        },
        {
            nombre: "trab3",
            fechaInicio: new Date(),
            fechaFin: null
        }
    ]

    let estado;
    let estadoColor;

    let trabajo = trabajos[index];

    if (trabajo.fechaInicio == null) {
        estado = "Sin inciar";
        estadoColor = "#cc3030";
    } else if (trabajo.fechaFin == null) {
        estado = "Iniciado";
        estadoColor = "#e0de57";
    } else {
        estado = "Terminado";
        estadoColor = "#6fcc63";
    }

    return (
        <div className="container">
            <form onSubmit={() => {ProcesarActualizarTrabajo(trabajo)}} action={() => { navigate("/user") }}>
                <p className="trabajo-card-title">{trabajo.nombre}</p>
                <p style={{ color: estadoColor, textShadow: " 0px 0px 20px " + estadoColor }}>{estado}</p>
                <div style={{ textAlign: "start" }}>
                    <p>Inicio: <input
                        type="date"
                        value={trabajo.fechaInicio ? new Date(trabajo.fechaInicio).toISOString().split("T")[0] : ""} />
                    </p>
                    <p>Fin: <input
                        type="date"
                        value={trabajo.fechaFin ? new Date(trabajo.fechaFin).toISOString().split("T")[0] : ""} />
                    </p>
                </div>
                <button style={{margin: "10px"}} type="submit" className="button">Actualizar</button>
            </form>
            <DrawingCanvas />
        </div>
    );
}