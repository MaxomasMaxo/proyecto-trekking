import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@example.com',
      celular: '123456789',
      ciudad: 'Bogotá',
      nickname: 'juanito',
      password: '123456',
      rutasFav: ['ruta1', 'ruta2']
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      email: 'maria@example.com',
      celular: '987654321',
      ciudad: 'Medellín',
      nickname: 'mary',
      password: 'password',
      rutasFav: ['ruta3']
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'López',
      email: 'carlos@example.com',
      celular: '456789123',
      ciudad: 'Cali',
      nickname: 'carlitos',
      password: 'secure123',
      rutasFav: []
    }
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  login(email: string, password: string): User | null {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user ? { ...user } : null;
  }

  addFavoriteRoute(userId: number, route: string): void {
    const user = this.users.find(u => u.id === userId);
    if (user && user.rutasFav) { // Verifica si user y user.rutasFavoritas están definidos
      user.rutasFav.push(route);
    }
  }
}
