import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbar,MatIcon,
    MatIconButton,MatButtonModule,MatDividerModule, NgOptimizedImage, NgIf],

  templateUrl: './navbar1.component.html', 
  styleUrl: './navbar1.component.scss'
})

export class Navbar1Component implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  logout(): void {
    this.authService.logout();
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}