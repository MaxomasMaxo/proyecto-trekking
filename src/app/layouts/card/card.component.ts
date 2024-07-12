import { Component, OnInit } from '@angular/core';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import {  NgFor } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutaService: RutaService) {}

  ngOnInit(): void {
    this.rutaService.getRutas().subscribe((data) => {
      this.rutas = data;
    });
  }
}
