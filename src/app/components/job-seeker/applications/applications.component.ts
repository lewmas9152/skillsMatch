// applications.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

interface Application {
  id: number;
  title: string;
  company: string;
  location: string;
  logo: string;
  status: 'Interview Scheduled' | 'Application Review' | 'Offer Received' | 'Rejected' | string;
  statusColor: string;
  appliedDate: string;
  timeAgo: string;
}

@Component({
  selector: 'app-applications',
  imports: [CommonModule, NavigationComponent], // Add necessary imports here
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css','../../../../styles.css'],
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc',
      location: 'San Francisco, CA - Remote optional',
      logo: 'TC',
      status: 'Interview Scheduled',
      statusColor: '#4794F8',
      appliedDate: 'Mar 28, 2025',
      timeAgo: '3 days ago'
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'MicroSystems',
      location: 'Remote',
      logo: 'MS',
      status: 'Application Review',
      statusColor: '#FFA500',
      appliedDate: 'Mar 25, 2025',
      timeAgo: '8 days ago'
    },
    {
      id: 3,
      title: 'UI Engineer',
      company: 'InnovateBuild',
      location: '',
      logo: 'IB',
      status: 'Offer Received',
      statusColor: '#4CAF50',
      appliedDate: 'Mar 15, 2025',
      timeAgo: '3 days ago'
    },
    {
      id: 4,
      title: 'Frontend Team Lead',
      company: 'TechCorp Inc',
      location: 'San Francisco, CA - Remote optional',
      logo: 'CW',
      status: 'Rejected',
      statusColor: '#9E9E9E',
      appliedDate: 'Mar 10, 2025',
      timeAgo: '3 weeks ago'
    }
  ];

  tabs = [
    { name: 'ALL', count: 12, isActive: true },
    { name: 'Active', count: 8, isActive: false },
    { name: 'Interviews', count: 2, isActive: false },
    { name: 'Offers', count: 1, isActive: false },
    { name: 'Archived', count: 1, isActive: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(index: number): void {
    this.tabs.forEach((tab, i) => {
      tab.isActive = i === index;
    });
    // Here you would typically filter the applications based on the selected tab
  }

  viewApplication(application: Application): void {
    console.log('Viewing application:', application);
    // Navigate to application details or open a modal
  }

  addNewApplication(): void {
    console.log('Adding new application');
    // Open add application form or navigate to add application page
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Interview Scheduled':
        return '#4794F8';
      case 'Application Review':
        return '#FFA500';
      case 'Offer Received':
        return '#4CAF50';
      case 'Rejected':
        return '#9E9E9E';
      default:
        return '#9E9E9E';
    }
  }
}