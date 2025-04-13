// job-listing.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule, NavigationComponent], // Add necessary imports here
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css', '../../../../styles.css'],
})
export class JobsComponent implements OnInit {
  job = {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc',
    location: 'San Francisco, CA(Remote optional)',
    postedDate: '2 days ago',
    matchPercentage: '95% Match',
    logo: 'TC',
    details: {
      employmentType: 'Full-time',
      experienceLevel: '5+ years',
      salaryRange: '$120,000 - $135,000 per year',
      location: 'San Francisco, CA(Remote optional)',
      department: 'Engineering'
    },
    skills: [
      { name: 'React.js', rating: 85 },
      { name: 'TypeScript', rating: 75 },
      { name: 'JavaScript', rating: 90 },
      { name: 'CSS/Sass', rating: 65 },
      { name: 'Redux', rating: 80 }
    ],
    description: 'TechCorp is seeking a Senior Frontend Developer to join our growing team. This role is primarily responsible for building and maintaining our',
    responsibilities: [
      'Lead the development of complex frontend features from conception to deployment',
      'Write clean, maintainable code following best practices and coding standards',
      'Collaborate with designers, product managers, and backend developers',
      'Mentor junior developers and review code',
      'Optimize applications for maximum speed and scalability'
    ],
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React.js preferred)',
      'Strong proficiency in TypeScript, HTML5, and CSS3/Sass',
      'Experience with state management libraries (Redux, MobX)',
      'Understanding of responsive design principles',
      'Experience with RESTful APIs and GraphQL'
    ],
    benefits: 'Competitive salary and equity package',
    similarJobs: [
      {
        title: 'Frontend Developer',
        company: 'WebSolutions LLC',
        location: 'San Francisco, CA',
        salary: '$100k - $120k',
        matchPercentage: '90% Match'
      },
      {
        title: 'UI Engineer',
        company: 'IntrovateSoft Inc',
        location: 'Remote',
        salary: '$100k - $120k',
        matchPercentage: '86% Match'
      },
      {
        title: 'UI Engineer',
        company: 'IntrovateSoft Inc',
        location: 'Remote',
        salary: '$100k - $120k',
        matchPercentage: '86% Match'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getObjectEntries(obj: any): [string, any][] {
    return Object.entries(obj || {});
  }

  saveJob(): void {
    console.log('Job saved');
  }

  shareJob(): void {
    console.log('Job shared');
  }

  applyNow(): void {
    console.log('Applied to job');
  }

  viewSimilarJob(job: any): void {
    console.log('Viewing similar job:', job);
  }
}