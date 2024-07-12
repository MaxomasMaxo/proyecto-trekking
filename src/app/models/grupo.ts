import { Ruta } from "./ruta";
import { User } from "./user";

export interface Grupo {
    id: number;
    nombre: string;
    rutaGrupo: Ruta;
    fecha:  Date;
    horaio: string;
    creador: string;
    integrantes:User[];
}
