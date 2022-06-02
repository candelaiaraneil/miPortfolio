import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../modelos/educacion';
import { Usuario } from '../modelos/usuario';
import { Experiencia } from '../modelos/experiencia';
import { Skills } from '../modelos/skills';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public obtenerUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiBaseUrl}/usuario/id/${id}`);
  }

  public updateUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiBaseUrl}/usuario/update`, usuario);
  }

  public obtenerEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiBaseUrl}/educacion/all`);
  }

  public agregarEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiBaseUrl}/educacion/agregar`, educacion);
  }

  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiBaseUrl}/educacion/update`, educacion);
  }

  public borrarEducacion(educacionId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/educacion/borrar/${educacionId}`);
  }

  public obtenerExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiBaseUrl}/experiencia/all`);
  }

  public agregarExperiencia(experiencia: Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiBaseUrl}/experiencia/agregar`, experiencia);
  }

  public updateExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiBaseUrl}/experiencia/update`, experiencia);
  }

  public borrarExperiencia(experienciaId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/experiencia/borrar/${experienciaId}`);
  }

  public obtenerSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiBaseUrl}/skills/all`);
  }

  public agregarSkills(skills: Skills):Observable<Skills> {
    return this.http.post<Skills>(`${this.apiBaseUrl}/skills/agregar`, skills);
  }

  public updateSkills(skills: Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiBaseUrl}/skills/update`, skills);
  }

  public borrarSkills(skillsId: number):Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/skills/borrar/${skillsId}`);
  }
  

}