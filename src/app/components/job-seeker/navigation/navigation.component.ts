import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../job-seeker.component.css'],
})
export class NavigationComponent {
  userName = 'JS'; // User initials for the avatar
  
  menuItems = [
    { icon: '📊', label: 'Dashboard', route: '/job-seeker/dashboard', active: false },
    { icon: '👤', label: 'Profile', route: '/job-seeker/profile', active: true },
    { icon: '🔍', label: 'Skills', route: '/job-seeker/skills', active: false },
    { icon: '💼', label: 'Jobs', route: '/job-seeker/jobs', active: false },
    { icon: '📝', label: 'Applications', route: '/job-seeker/applications', active: false },
    { icon: '🛤️', label: 'Career Path', route: '/job-seeker/career-path', active: false },
    { icon: '⚙️', label: 'Settings', route: '/job-seeker/settings', active: false }
  ];

 
}