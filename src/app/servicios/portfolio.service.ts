import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiBaseUrl}/usuario/id/1`);
  }

  public updateUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiBaseUrl}/usuario/update`, usuario);
  }

}
