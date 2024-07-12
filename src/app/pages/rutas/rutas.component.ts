import { Component } from '@angular/core';
import { CardComponent } from "../../layouts/card/card.component";

@Component({
    selector: 'app-rutas',
    standalone: true,
    templateUrl: './rutas.component.html',
    styleUrl: './rutas.component.scss',
    imports: [CardComponent]
})
export class RutasComponent {

}
