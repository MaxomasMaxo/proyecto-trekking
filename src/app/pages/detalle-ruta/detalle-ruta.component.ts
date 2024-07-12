import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../layouts/dialogo/dialogo.component';


@Component({
  selector: 'app-detalle-ruta',
  standalone: true,
  imports: [DialogoComponent],
  templateUrl: './detalle-ruta.component.html',
  styleUrl: './detalle-ruta.component.scss'
})
export class DetalleRutaComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(DialogoComponent, {
      width: '300px',
      data: { /* datos opcionales */ }
    });
  }
}
