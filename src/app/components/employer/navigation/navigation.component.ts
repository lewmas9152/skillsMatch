import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../../../../styles.css'],
})
export class NavigationComponent {
  userInitials = 'JS'; // User initials for the avatar
  isMobileMenuOpen = false; // Add this property for mobile menu state
  
  menuItems = [
    { icon: '📊', label: 'Dashboard', route: '/employer/dashboard', active: true },
    { icon: '💼', label: 'Job Management', route: '/employer/job-management', active: false },
    { icon: '👥', label: 'Candidates', route: '/employer/candidates', active: false },
    { icon: '🗓️', label: 'Interviews', route: '/employer/interviews', active: false },
    { icon: '📈', label: 'Analytics', route: '/employer/analytics', active: false },
    { icon: '⚙️', label: 'Settings', route: '/employer/settings', active: false }
  ];

  // Add this method to toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}