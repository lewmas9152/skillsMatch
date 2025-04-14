import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'], // Component-specific styles if needed
})
export class NavigationComponent {
  userInitials = 'SM'; // User initials for the avatar
  isMobileMenuOpen = false;
  
  menuItems = [
    { icon: '📊', label: 'Dashboard', route: '/admin/dashboard', active: true },
    { icon: '👥', label: 'User Management', route: '/admin/userManagement', active: true },
    { icon: '⚙️', label: 'System Config', route: '/admin/systemConfig', active: false },
    { icon: '🤖', label: 'AI Training', route: '/admin/aiTraining', active: false }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}