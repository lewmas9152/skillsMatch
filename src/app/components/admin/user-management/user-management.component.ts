// user-management.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Locked';
  initials: string;
  avatarColor: string;
}

@Component({
  selector: 'app-user-management',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  currentPage = 1;
  totalUsers = 26;
  usersPerPage = 4;
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Mock data based on the screenshot
    this.users = [
      {
        id: '001',
        name: 'John Doe',
        email: 'john@gmail.com',
        role: 'Admin',
        status: 'Active',
        initials: 'JD',
        avatarColor: '#4794F8'
      },
      {
        id: '002',
        name: 'Jane Smith',
        email: 'jane@gmail.com',
        role: 'Job Seeker',
        status: 'Active',
        initials: 'JS',
        avatarColor: '#FF4081'
      },
      {
        id: '003',
        name: 'Robert Johnson',
        email: 'Robert@gmail.com',
        role: 'Employer',
        status: 'Locked',
        initials: 'RJ',
        avatarColor: '#4CAF50'
      },
      {
        id: '004',
        name: 'Sarah Wilson',
        email: 'sarah@gmail.com',
        role: 'Employer',
        status: 'Active',
        initials: 'SW',
        avatarColor: '#4794F8'
      }
    ];
    this.filteredUsers = [...this.users];
  }

  searchUsers(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm) || 
      user.email.toLowerCase().includes(this.searchTerm) ||
      user.role.toLowerCase().includes(this.searchTerm)
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
    // In a real app, you would fetch the users for this page
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.totalUsers / this.usersPerPage)) {
      this.changePage(this.currentPage + 1);
    }
  }

  addNewUser(): void {
    // Implement user addition logic
    console.log('Adding new user');
  }

  viewUser(userId: string): void {
    console.log('Viewing user', userId);
  }

  editUser(userId: string): void {
    console.log('Editing user', userId);
  }

  moreOptions(userId: string): void {
    console.log('More options for user', userId);
  }
}