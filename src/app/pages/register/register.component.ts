import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Auth, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;

  private auth: Auth;

  constructor(private router: Router) {
    // Inicializar Firebase Auth
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  async onSubmit(email: string, password: string) {
    // Validar el email y la contraseña
    if (this.validateEmail(email) && this.validatePassword(password)) {
      try {
        // Crear un nuevo usuario en Firebase
        await createUserWithEmailAndPassword(this.auth, email, password);
        console.log('Registro exitoso para:', email);
        // Redirigir a la página de inicio
        this.router.navigate(['/inicio']);
      } catch (error: any) { // Especifica el tipo de error como 'any'
        // Manejar errores de registro
        this.errorMessage = error.message; // Ahora TypeScript reconoce 'error.message'
      }
    } else {
      this.errorMessage = 'Datos de registro incorrectos.';
    }
  }
  

  validateEmail(email: string): boolean {
    // Validación simple de email
    return email.includes('@');
  }

  validatePassword(password: string): boolean {
    // Validación simple de contraseña (ejemplo: mínimo 6 caracteres)
    return password.length >= 6;
  }
}
