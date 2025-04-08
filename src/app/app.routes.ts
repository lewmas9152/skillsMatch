// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'job-seeker', pathMatch: 'full' },
  {
    path: 'job-seeker',
    loadChildren: () => import('./components/job-seeker/job-seeker.routes').then(r => r.JOB_SEEKER_ROUTES)
  },
//   {
//     path: 'admin',
//     loadChildren: () => import('./components/admin/admin.routes').then(r => r.ADMIN_ROUTES)
//   },
//   {
//     path: 'employer',
//     loadChildren: () => import('./components/employer/employer.routes').then(r => r.EMPLOYER_ROUTES)
//   },
  { path: '**', redirectTo: 'job-seeker' }
];