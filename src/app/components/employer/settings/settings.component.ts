// settings.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-settings',
  imports: [CommonModule,ReactiveFormsModule, NavigationComponent, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileForm: FormGroup;
  notificationForm: FormGroup;
  integrationForm: FormGroup;
  accountForm: FormGroup;
  activeTab: string = 'profile';
  
  // For profile image preview
  profileImageSrc: string = 'assets/images/default-avatar.png';
  
  // Notification options
  emailNotifications = [
    { id: 'new-applicants', label: 'New applicants', checked: true },
    { id: 'interview-reminders', label: 'Interview reminders', checked: true },
    { id: 'job-expiry', label: 'Job expiry warnings', checked: false },
    { id: 'weekly-summary', label: 'Weekly summary reports', checked: true }
  ];
  
  // Available integrations
  integrations = [
    { id: 'linkedin', name: 'LinkedIn', connected: true, icon: 'linkedin' },
    { id: 'indeed', name: 'Indeed', connected: false, icon: 'search' },
    { id: 'google-jobs', name: 'Google Jobs', connected: true, icon: 'google' },
    { id: 'slack', name: 'Slack', connected: false, icon: 'message-square' },
    { id: 'outlook', name: 'Outlook Calendar', connected: true, icon: 'calendar' }
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Smith', Validators.required],
      email: ['john.smith@company.com', [Validators.required, Validators.email]],
      phoneNumber: ['(555) 123-4567', Validators.pattern('^[\\d\\(\\)\\-\\s]+$')],
      jobTitle: ['HR Manager', Validators.required],
      department: ['Human Resources', Validators.required]
    });
    
    this.notificationForm = this.fb.group({
      emailDigest: ['daily'],
      pushNotifications: [true]
    });
    
    this.integrationForm = this.fb.group({});
    
    this.accountForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]],
      confirmPassword: ['']
    });
  }
  
  ngOnInit(): void {
  }
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  
  onProfileImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  updateProfile(): void {
    if (this.profileForm.valid) {
      // Handle profile update logic
      console.log('Profile updated:', this.profileForm.value);
      alert('Profile updated successfully!');
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
  
  updateNotifications(): void {
    if (this.notificationForm.valid) {
      // Handle notification settings update
      const notificationSettings = {
        ...this.notificationForm.value,
        emailOptions: this.emailNotifications.filter(n => n.checked).map(n => n.id)
      };
      console.log('Notification settings updated:', notificationSettings);
      alert('Notification settings updated successfully!');
    }
  }
  
  toggleIntegration(integration: any): void {
    integration.connected = !integration.connected;
    console.log(`${integration.name} ${integration.connected ? 'connected' : 'disconnected'}`);
  }
  
  changePassword(): void {
    if (this.accountForm.valid) {
      // Handle password change logic
      console.log('Password changed');
      alert('Password changed successfully!');
      this.accountForm.reset();
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}