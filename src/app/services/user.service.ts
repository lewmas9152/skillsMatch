import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  // other user properties
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'users';
  
  constructor() { } // Remove HttpClient dependency
  
  // In a real application, this would be an API call
  registerUser(userData: any): void {
    // For demo purposes, we'll store in localStorage
    const users = this.getUsers();
    users.push(userData);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }
  
  // In a real application, this would be an API call
  loginUser(emailOrUsername: string, password: string): Observable<any> {
    // For demo purposes, we'll check localStorage
    const users = this.getUsers();
    const user = users.find(u => 
      (u.email === emailOrUsername || u.username === emailOrUsername) && 
      u.password === password
    );
    
    if (user) {
      // Store current user in session
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return of(user);
    }
    
    return throwError(() => new Error('Invalid credentials'));
  }
  
  getCurrentUser(): User | null {
    const userJson = sessionStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }
  
  logout(): void {
    sessionStorage.removeItem('currentUser');
  }
  
  private getUsers(): any[] {
    const usersJson = localStorage.getItem(this.STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}