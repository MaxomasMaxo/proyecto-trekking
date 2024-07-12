import { Component } from '@angular/core';
import {FormFieldComponent } from "../../layouts/form-field/form-field.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [FormFieldComponent, NgOptimizedImage],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.scss'
})
export class EditarPerfilComponent {

}
