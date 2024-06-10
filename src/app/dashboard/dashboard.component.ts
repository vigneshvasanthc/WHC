import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
