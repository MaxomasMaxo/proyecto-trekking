import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink,Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, NgOptimizedImage, RouterLink,CommonModule],
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
  formData = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.formData.email, this.formData.password).subscribe(
      user => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Email o contraseña incorrectos';
        }
      },
      () => {
        this.errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
      }
    );
  }
}
