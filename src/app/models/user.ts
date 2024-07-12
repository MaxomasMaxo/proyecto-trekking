import { Ruta } from "./ruta";

export interface User {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string;
    ciudad: string;
    nickname: string;
    password: string;
    imagen:string;
    rutasFav?: Ruta[];
}
