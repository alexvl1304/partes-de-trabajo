import { Link, useNavigate, useParams } from "react-router-dom";
import type Trabajo from "../scripts/trabajo";
import DrawingCanvas from "../componentes/draw-canvas";

export function DetallesTrabajo() {
    const { id } = useParams();
    const navigate = useNavigate();
    if (id == undefined) { navigate("user"); }

    let index = Number.parseInt(id!);

    const trabajos: Trabajo[] = [
        {
            nombre: "trab1",
            fechaInicio: new Date(),
            fechaFin: new Date()
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
            <p className="trabajo-card-title">{trabajo.nombre}</p>
            <p style={{ color: estadoColor, textShadow: " 0px 0px 20px " + estadoColor }}>{estado}</p>
            <div style={{ textAlign: "start" }}>
                <p>Inicio: <strong> {(trabajo.fechaInicio == null) ? "-- --" : trabajo.fechaInicio!.toDateString()}</strong></p>
                <p>Fin: <strong> {(trabajo.fechaFin == null) ? "-- --" : trabajo.fechaFin!.toDateString()}</strong></p>
            </div>
            <DrawingCanvas></DrawingCanvas>
        </div>
    );
}