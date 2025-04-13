// app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/landing-pages/landing-pages.routes').then(r => r.LANDING_PAGES_ROUTES)
  },
  {
    path: 'job-seeker',
    canActivate: [AuthGuard],
    data: { roles: ['Job Seeker'] },
    loadChildren: () => import('./components/job-seeker/job-seeker.routes').then(r => r.JOB_SEEKER_ROUTES)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    loadChildren: () => import('./components/admin/admin.routes').then(r => r.ADMIN_ROUTES)
  },
  {
    path: 'employer',
    canActivate: [AuthGuard],
    data: { roles: ['Employer'] },
    loadChildren: () => import('./components/employer/employer.routes').then(r => r.EMPLOYER_ROUTES)
  },
  { path: '**', redirectTo: 'home' }
];