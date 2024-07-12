import { Component } from '@angular/core';
import { CarruselComponent } from '../../layouts/carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
