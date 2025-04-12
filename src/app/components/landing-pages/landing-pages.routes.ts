// job-seeker/job-seeker.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPagesComponent } from './landing-pages.component';




export const LANDING_PAGES_ROUTES: Routes = [
  {
    path: '',
    component: LandingPagesComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      {path: 'landing', component: LandingComponent},
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignupComponent },
    ]
  }
];