import { Component } from '@angular/core';
import { CardGruposComponent } from "../../layouts/card-grupos/card-grupos.component";


@Component({
    selector: 'app-grupos',
    standalone: true,
    templateUrl: './grupos.component.html',
    styleUrl: './grupos.component.scss',
    imports: [CardGruposComponent]
})
export class GruposComponent {

}
