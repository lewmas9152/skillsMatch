import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

interface JobMatch {
  id: string;
  company: string;
  position: string;
  location: string;
  workType: string;
  skills: string[];
  matchPercentage: number;
  companyInitials: string;
}

interface Interview {
  company: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = 'Jessica';
  newMatches = 5;
  updatesCount = 2;
  interviewsCount = 3;
  profileStrength = 80;
  
  applicationStatus = {
    offers: 3,
    interviews: 5,
    inReview: 8,
    rejected: 4
  };
  
  jobMatches: JobMatch[] = [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA(Remote)',
      workType: 'Remote',
      skills: ['React', 'TypeScript', 'AWS'],
      matchPercentage: 92,
      companyInitials: 'TC'
    },
    {
      id: '2',
      company: 'InnoDesign Studio',
      position: 'UX/UI DESIGNER',
      location: 'New York, NY (Hybrid)',
      workType: 'Hybrid',
      skills: ['Figma', 'UI/UX', 'WireFraming'],
      matchPercentage: 87,
      companyInitials: 'ID'
    },
    {
      id: '3',
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA(Remote)',
      workType: 'Remote',
      skills: ['Node.js', 'MongoDB', 'React'],
      matchPercentage: 83,
      companyInitials: 'TC'
    },
    {
      id: '4',
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA(Remote)',
      workType: 'Remote',
      skills: ['React', 'TypeScript', 'AWS'],
      matchPercentage: 92,
      companyInitials: 'TC'
    }
  ];
  
  upcomingInterviews: Interview[] = [
    {
      company: 'TechCorp Inc.',
      date: 'Today',
      time: '2:00 PM',
      status: 'upcoming'
    },
    {
      company: 'InnoDesign Studio',
      date: 'Tomorrow',
      time: '10:30',
      status: 'upcoming'
    },
    {
      company: 'TechCorp Inc.',
      date: 'Today',
      time: '2:00 PM',
      status: 'upcoming'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // You could fetch real data here from a service
  }

  addMissingSkills(): void {
    // Implementation for adding missing skills
    console.log('Navigate to skills page');
  }
}