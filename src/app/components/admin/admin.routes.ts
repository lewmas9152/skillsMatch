import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SystemConfigurationComponent } from './system-configuration/system-configuration.component';
import { AiTrainingComponent } from './ai-training/ai-training.component';



export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'userManagement', component: UserManagementComponent },
      { path: 'systemConfig', component: SystemConfigurationComponent },
      { path: 'aiTraining', component: AiTrainingComponent }
    ]
  }
];