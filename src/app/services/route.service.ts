import { Injectable } from '@angular/core';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private routes: Route[] = [
    {
      id: 1,
      nombre: 'Campana',
      descripcion: 'Descripcion de la ruta 1',
      imagen: 'ruta1.jpg',
      ubicacion: 'Ubicacion 1',
      dificultad: 3,
      calificacion: 4
    },
    {
      id: 2,
      nombre: 'Salto del agua - Placilla',
      descripcion: 'Descripcion de la ruta 2',
      imagen: 'ruta2.jpg',
      ubicacion: 'Ubicacion 2',
      dificultad: 2,
      calificacion: 3
    },
    {
      id: 3,
      nombre: 'Cerro Mauco',
      descripcion: 'Descripcion de la ruta 3',
      imagen: 'ruta3.jpg',
      ubicacion: 'Ubicacion 3',
      dificultad: 4,
      calificacion: 5
    }
  ];

  getRouteById(id: number): Route | undefined {
    return this.routes.find(route => route.id === id);
  }

  addRouteToFavorites(userId: number, routeId: number): void {
    // TO DO: implement logic to add route to user's favorites
  }

}