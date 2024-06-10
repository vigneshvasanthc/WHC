import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private token : string | null = null;

  constructor(private router: Router) { }

  login(userName: string, password: string, emailId: string, mobileNumber: number): boolean {
    if(userName === 'vicky' && password === 'vicky@123') {
      this.isLoggedIn = true;
      this.token= 'fake-jwt-token';
      localStorage.setItem('token', this.token)
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn =  false;
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }
}
