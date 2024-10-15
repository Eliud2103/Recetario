import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esto a la URL de tu API
  private isLoggedIn = false; // Variable para controlar si el usuario está autenticado
  private userEmail: string | null = null; // Almacena el email del usuario autenticado

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo: email, contrasena: password });
  }

  // Manejar respuesta del inicio de sesión
  handleLoginResponse(response: any) {
    if (response.success) {
      this.isLoggedIn = true;
      this.userEmail = response.userEmail; // Si la respuesta incluye el email
      console.log('Inicio de sesión exitoso');
    } else {
      console.error('Error en el inicio de sesión:', response.message);
    }
  }

  // Método para cerrar sesión
  logout() {
    this.isLoggedIn = false;
    this.userEmail = null;
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Obtener el correo del usuario autenticado (opcional)
  getUserEmail(): string | null {
    return this.userEmail;
  }
}
