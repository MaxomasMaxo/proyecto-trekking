import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Grupo } from '../models/grupo';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private apiUrl = environment.apiUrl + '/grupos';

  constructor(private http: HttpClient) {}

  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  getGrupo(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }

  addGrupo(grupo: Grupo, creador: User): Observable<Grupo> {
    grupo.creador = `${creador.nombre} ${creador.apellido}`;
    grupo.integrantes = [creador];
    return this.http.post<Grupo>(this.apiUrl, grupo);
  }

  updateGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(`${this.apiUrl}/${grupo.id}`, grupo);
  }

  deleteGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addUserToGrupo(grupoId: number, user: User): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${grupoId}`).pipe(
      switchMap((grupo: Grupo) => {
        grupo.integrantes.push(user);
        return this.http.put<Grupo>(`${this.apiUrl}/${grupoId}`, grupo);
      })
    );
  }
}
