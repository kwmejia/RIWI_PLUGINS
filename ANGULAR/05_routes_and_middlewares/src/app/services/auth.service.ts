import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
            localStorage.setItem('authToken', response.token)          
        }),
        catchError(error => {
          // Manejar errores
          console.error('Error durante el login', error);
          return throwError(() => error);
        })
      );
  }

  logout() {
    localStorage.removeItem('authToken');  // Elimina el token del localStorage
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');  // Verifica si el token existe
  }
}
