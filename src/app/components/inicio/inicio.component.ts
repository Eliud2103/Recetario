import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  
})
export class InicioComponent {
  correo: string = '';
  pass: string = '';
  constructor(private router: Router) {} 
  onLogin() {
  
    if (this.correo && this.pass) {
      console.log('Correo:', this.correo);
      console.log('Contraseña:', this.pass);
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor ingresa todos los campos.');
    }
  }
  
}
