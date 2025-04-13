import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      emailOrUsername: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { emailOrUsername, password } = this.loginForm.value;
      console.log('Login attempt:', this.loginForm.value);
      
      // Authenticate user and get their role
      this.userService.loginUser(emailOrUsername, password).subscribe({
        next: (userData) => {
          if (userData) {
            this.redirectBasedOnUserType(userData.userType);
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          // Show login error to user
          alert('Invalid username or password');
        }
      });
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Method to redirect based on user type
  redirectBasedOnUserType(userType: string): void {
    switch (userType) {
      case 'Job Seeker':
        this.router.navigate(['/job-seeker/dashboard']);
        break;
      case 'Employer':
        this.router.navigate(['/employer/dashboard']);
        break;
      case 'Admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        // Fallback for unknown user types
        this.router.navigate(['/']);
        break;
    }
  }

  loginWithGoogle(): void {
    console.log('Login with Google');
    // Implement Google authentication with role check & redirection
  }

  loginWithApple(): void {
    console.log('Login with Apple');
    // Implement Apple authentication with role check & redirection
  }

  loginWithLinkedIn(): void {
    console.log('Login with LinkedIn');
    // Implement LinkedIn authentication with role check & redirection
  }

  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}