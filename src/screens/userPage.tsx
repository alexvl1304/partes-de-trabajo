import { useAuth } from "../context/authContext";
import "../assets/css/App.css"
import { ListaTrabajos } from "../componentes/lista-trabajos";
import type Trabajo from "../scripts/trabajo";

export function UserPage() {

    const auth = useAuth();

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

    return (
        <div className="container">
            <p className="title">Hola, {auth.user}</p>

            <button className="cerrar-sesion-button" onClick={() => auth.signout(() => window.location.reload())}>Cerrar sesión</button>

            <p className="left-text">Trabajos asignados:</p>

            <ListaTrabajos trabajos={trabajos} />

        </div>
    );
}