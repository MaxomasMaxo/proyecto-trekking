import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/users';
  private currentUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.currentUser = users[0];
          return this.currentUser;
        } else {
          return null;
        }
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable<User | null>(observer => {
      observer.next(this.currentUser);
      observer.complete();
    });
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}