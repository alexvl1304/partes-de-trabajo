import type Trabajo from "./trabajo";

export default function ProcesarActualizarTrabajo(trabajo : Trabajo){
    let peticionesTrabajos = localStorage.getItem("peticiones-actualizar-trabajo") as Trabajo[] | null;
    if(peticionesTrabajos == null) peticionesTrabajos = [];

    peticionesTrabajos.push(trabajo);

    //hay que hacer un .map de la lista de trabajos
    //localStorage.setItem("peticiones-actualizar-trabajo", peticionesTrabajos);
}