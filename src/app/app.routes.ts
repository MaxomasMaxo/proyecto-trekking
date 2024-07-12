import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { DetalleRutaComponent } from './pages/detalle-ruta/detalle-ruta.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { IniciarSesionComponent } from './pages/iniciarS/iniciar-sesion.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},{
    path:'perfil',
    component:PerfilComponent
},{
    path:'iniciarSesion',
    component:IniciarSesionComponent
},{
    path:'rutas',
    component:RutasComponent
},{
    path:'detalleRuta',
    component:DetalleRutaComponent
},{
    path:'grupos',
    component:GruposComponent
},{
    path:'recomendaciones',
    component:RecomendacionesComponent
},{
    path:'editar perfil',
    component:EditarPerfilComponent
}

];
