import type Trabajo from "../scripts/trabajo.ts"
import "../assets/css/trabajo-card.css"
import {useNavigate } from "react-router-dom";

interface ListaProps {
    trabajos: Trabajo[],
}

export const ListaTrabajos = (props: ListaProps) => {
    return (
        <div style={{ justifyContent: "start" }}>{
            props.trabajos.map((item, index) => (

                CardTrabajo(item, index)

            ))
        }
        </div>
    );
}

const CardTrabajo = (trabajo: Trabajo, index: number) => {

    let estado;
    let estadoColor;

    const navigate = useNavigate();

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
        <div onClick={() => { navigate(`/trabajo/${index}`); }} className="trabajo-card-container">
            <p className="trabajo-card-title">{trabajo.nombre}</p>
            <p style={{ color: estadoColor, textShadow: " 0px 0px 20px " + estadoColor }}>{estado}</p>
            <div style={{ textAlign: "start" }}>
                <p>Inicio: <strong> {(trabajo.fechaInicio == null) ? "-- --" : trabajo.fechaInicio!.toDateString()}</strong></p>
                <p>Fin: <strong> {(trabajo.fechaFin == null) ? "-- --" : trabajo.fechaFin!.toDateString()}</strong></p>
            </div>
        </div>
    );
}