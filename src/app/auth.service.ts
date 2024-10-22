import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken'); // Verifica si hay un token
  }

  logout() {
    localStorage.removeItem('userToken'); // Elimina el token
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  login(token: string) {
    localStorage.setItem('userToken', token); // Almacena el token
    this.router.navigate(['/inicio']); // Redirige al usuario
  }
}
