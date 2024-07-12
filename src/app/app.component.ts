import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layouts/footer/footer.component";
import { Navbar1Component } from "./layouts/navbar1/navbar1.component";
import { CardComponent } from "./layouts/card/card.component";
import { IniciarSesionComponent } from "./pages/iniciarS/iniciar-sesion.component";
import { environment } from '../environments/environment';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, Navbar1Component, CardComponent, HttpClientModule, IniciarSesionComponent]
})

export class AppComponent {

    constructor() { }
}


