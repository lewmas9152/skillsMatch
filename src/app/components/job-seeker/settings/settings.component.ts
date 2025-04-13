import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css','../../../../styles.css']
})
export class SettingsComponent {
  activeTab = 'Account';
  tabs = ['Account', 'Profile', 'Notifications', 'Privacy', 'Billing'];
  
  userInfo = {
    fullName: 'jessica smith',
    email: 'jessica.smith@gmail.com',
    phoneNumber: '+254 9856 7938',
    location: 'San Francisco , CA',
    currentPassword: '••••••••••••••••',
    newPassword: '',
    confirmPassword: '',
    language: 'English (United States)'
  };

  linkedAccounts = [
    { name: 'Google', status: 'Connected', connected: true },
    { name: 'LinkedIn', status: 'Connected', connected: true },
    { name: 'Github', status: 'Connect', connected: false }
  ];

  twoFactorEnabled = false;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  saveChanges() {
    // Logic to save personal information
    alert('Personal information saved!');
  }

  updatePassword() {
    // Logic to update password
    if (this.userInfo.newPassword && this.userInfo.newPassword === this.userInfo.confirmPassword) {
      alert('Password updated successfully!');
      this.userInfo.newPassword = '';
      this.userInfo.confirmPassword = '';
    } else {
      alert('Passwords do not match or are empty!');
    }
  }

  toggleTwoFactor() {
    this.twoFactorEnabled = !this.twoFactorEnabled;
  }

  deactivateAccount() {
    if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
      // Logic to deactivate account
      alert('Account deactivation requested.');
    }
  }
}