import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';


export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},{
    path:'profile',
    component:PerfilComponent
},
{
    path:'rutas',
    component:RutasComponent
},
{
    path:'login',
    component:IniciarSesionComponent
}

];
