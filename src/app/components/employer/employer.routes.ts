import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EmployerComponent } from './employer.component'
import { SettingsComponent } from './settings/settings.component';

export const EMPLOYER_ROUTES: Routes = [
  {
    path: '',
    component: EmployerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'job-management', component: JobManagementComponent },
      { path: 'candidates', component: CandidatesComponent },
      { path: 'interviews', component: InterviewsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      {path: 'settings', component:SettingsComponent },
    ]
  }
];