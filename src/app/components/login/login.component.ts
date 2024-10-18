import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importar funciones de Firebase Auth
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // No necesitas FormsModule ya que no usas ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';  // Mensaje de error en caso de fallo de login

  constructor(private router: Router) {}

  // Método que se ejecuta al enviar el formulario
  onSubmit(correo: string, pass: string) {
    if (correo && pass) {
      const auth = getAuth();  // Obtener la instancia de autenticación de Firebase

      // Intentar iniciar sesión con Firebase Auth
      signInWithEmailAndPassword(auth, correo, pass)
        .then((userCredential) => {
          // Si el login es exitoso, redirige a otra página (por ejemplo, 'home')
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          // Si hay un error, mostrar un mensaje
          this.errorMessage = 'Correo o contraseña incorrectos.';
          alert("incorrecto");
        });
    } else {
      // Si faltan datos, mostrar un mensaje de error
      this.errorMessage = 'Por favor, complete ambos campos.';
    }
  }
}
