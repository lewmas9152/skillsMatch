// job-seeker/job-seeker.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




export const LANDING_PAGES_ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignupComponent }
    ]
  }
];