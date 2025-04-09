// job-management.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

interface Job {
  id: number;
  title: string;
  postDate: Date;
  applications: number;
  location: string;
  salary: string;
  status: 'ACTIVE' | 'CLOSED';
}

@Component({
  selector: 'app-job-management',
  imports: [ReactiveFormsModule, CommonModule, NavigationComponent],
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
})
export class JobManagementComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  statusFilter = 'All';
  sortOption = 'Newest First';
  searchControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    // Initialize with sample data
    this.jobs = [
      {
        id: 1,
        title: 'Senior Software Engineer',
        postDate: new Date('2025-04-02'),
        applications: 47,
        location: 'San Francisco, CA',
        salary: '$130,000 - $160,000',
        status: 'ACTIVE'
      },
      {
        id: 2,
        title: 'UI/UX Designer',
        postDate: new Date('2025-04-01'),
        applications: 23,
        location: 'Remote',
        salary: '$90,000 - $120,000',
        status: 'ACTIVE'
      },
      {
        id: 3,
        title: 'Product Manager',
        postDate: new Date('2025-03-28'),
        applications: 32,
        location: 'Chicago, IL, CA',
        salary: '$110,000 - $140,000',
        status: 'ACTIVE'
      },
      {
        id: 4,
        title: 'Marketing Specialist',
        postDate: new Date('2025-03-28'),
        applications: 32,
        location: 'New York, NY',
        salary: '$70,000 - $90,000',
        status: 'CLOSED'
      },
      {
        id: 5,
        title: 'Data Analyst',
        postDate: new Date('2025-03-20'),
        applications: 27,
        location: 'Boston, MA',
        salary: '$85,000 - $105,000',
        status: 'ACTIVE'
      }
    ];
    
    this.filterJobs();
    
    // Set up search subscription
    this.searchControl.valueChanges.subscribe(() => {
      this.filterJobs();
    });
  }

  filterJobs(): void {
    let filtered = this.jobs;
    
    // Apply status filter
    if (this.statusFilter !== 'All') {
      filtered = filtered.filter(job => job.status === this.statusFilter);
    }
    
    // Apply search filter
    const searchTerm = this.searchControl.value?.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.location.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply sorting
    if (this.sortOption === 'Newest First') {
      filtered.sort((a, b) => b.postDate.getTime() - a.postDate.getTime());
    } else if (this.sortOption === 'Oldest First') {
      filtered.sort((a, b) => a.postDate.getTime() - b.postDate.getTime());
    } else if (this.sortOption === 'Title A-Z') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'Title Z-A') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    this.filteredJobs = filtered;
  }

  onStatusFilterChange(event: Event): void {
    this.statusFilter = (event.target as HTMLSelectElement).value;
    this.filterJobs();
  }

  onSortOptionChange(event: Event): void {
    this.sortOption = (event.target as HTMLSelectElement).value;
    this.filterJobs();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  createNewJob(): void {
    // Implement navigation to job creation page
    console.log('Creating new job');
  }

  editJob(jobId: number): void {
    // Implement navigation to job editing page
    console.log('Editing job', jobId);
  }

  viewJob(jobId: number): void {
    // Implement navigation to job details page
    console.log('Viewing job', jobId);
  }
}