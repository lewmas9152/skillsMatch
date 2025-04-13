// navigation.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../admin.component.css'],
})
export class NavigationComponent {
  userInitials = 'SM'; // User initials for the avatar
  menuItems = [
    { icon: '📊', label: 'Dashboard',route:'/admin/dashboard', active: true },
    { icon: '👥', label: 'User Management',route:'/admin/userManagement', active: true },
    { icon: '⚙️', label: 'System Config',route:'/admin/systemConfig', active: false },
    { icon: '🤖', label: 'AI Training',route:'/admin/aiTraining', active: false }
  ];
}