import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  userTypes = ['Job Seeker', 'Employer', 'Recruiter'];
  selectedUserType: string = 'Job Seeker';
  passwordStrength: string = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });

    // Monitor password changes to evaluate strength
    this.signupForm.get('password')?.valueChanges.subscribe(password => {
      this.evaluatePasswordStrength(password);
    });
  }

  selectUserType(type: string): void {
    this.selectedUserType = type;
    console.log()
  }

  evaluatePasswordStrength(password: string): void {
    if (!password) {
      this.passwordStrength = '';
      return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = 
      (password.length >= 8 ? 1 : 0) +
      (hasUpperCase ? 1 : 0) +
      (hasLowerCase ? 1 : 0) +
      (hasNumbers ? 1 : 0) +
      (hasSpecialChars ? 1 : 0);

    if (strength <= 2) this.passwordStrength = 'weak';
    else if (strength <= 4) this.passwordStrength = 'medium';
    else this.passwordStrength = 'strong';
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
      // Here you would typically call your authentication service
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}