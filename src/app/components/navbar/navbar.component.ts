import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = true;

  constructor(private router: Router) {
    // Verifica si el usuario está logueado al inicializar
    this.checkLoginStatus();
  }

  // Verifica el estado de login
  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('userToken');
  }

  // Método para simular el login
  login() {
    localStorage.setItem('userToken', 'some-token'); // Almacena un token
    this.isLoggedIn = true; // Actualiza el estado
    this.router.navigate(['/inicio']); // Redirige al usuario
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('userToken'); // Elimina el token
    this.isLoggedIn = false; // Actualiza el estado
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }
}
