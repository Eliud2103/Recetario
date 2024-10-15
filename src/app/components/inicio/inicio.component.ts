import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'], // Corrige 'styleUrl' a 'styleUrls'
})
export class InicioComponent {
  correo: string = '';
  pass: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Verifica que ambos campos estén llenos
    if (this.correo && this.pass) {
      // Llama al servicio de autenticación para iniciar sesión
      this.authService.login(this.correo, this.pass).subscribe({
        next: (response) => {
          this.authService.handleLoginResponse(response); // Maneja la respuesta
          if (this.authService.isAuthenticated()) {
            // Si la autenticación es exitosa, navega a la página de inicio
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.error('Error al iniciar sesión:', err); // Maneja errores
        },
      });
    } else {
      console.log('Por favor ingresa todos los campos.');
    }
  }
}
