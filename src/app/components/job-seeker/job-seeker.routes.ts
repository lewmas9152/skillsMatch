// job-seeker/job-seeker.routes.ts
import { Routes } from '@angular/router';
import { JobSeekerComponent } from './job-seeker.component';
import { DashboardComponent } from './dashboard/dashboard.component';       
import { ApplicationsComponent } from './applications/applications.component';
import { CareerPathComponent } from './career-path/career-path.component';  
import { JobsComponent } from './jobs/jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SkillsComponent } from './skills/skills.component';


export const JOB_SEEKER_ROUTES: Routes = [
  {
    path: '',
    component: JobSeekerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'career-path', component: CareerPathComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'skills', component: SkillsComponent },
    ]
  }
];