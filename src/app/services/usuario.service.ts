import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private apiUrl = environment.apiContatos.replace(/\/$/, '');

  private criarHeadersAutenticados(): HttpHeaders {
    const token = this.authService.buscarToken();

    if (!token) {
      return new HttpHeaders();
    }

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  get(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.apiUrl}/usuarios`, {
      headers: this.criarHeadersAutenticados(),
    });
  }

  buscarPorId(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.apiUrl}/usuarios/${id}`, {
      headers: this.criarHeadersAutenticados(),
    });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${id}`, {
      headers: this.criarHeadersAutenticados(),
    });
  }
}
