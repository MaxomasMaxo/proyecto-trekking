import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { GrupoService } from '../../services/grupo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-grupos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-grupos.component.html',
  styleUrl: './card-grupos.component.scss'
})
export class CardGruposComponent implements OnInit {
  grupos: Grupo[] = [];

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.grupoService.getGrupos().subscribe((data: Grupo[]) => {
      this.grupos = data;
    });
  }
}