// landing.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css', '../landing-pages.component.css'],
})
export class LandingComponent {
  title = 'job-matcher';
  
  stats = [
    { value: '18k+', description: 'Job Seekers' },
    { value: '25k+', description: 'Companies' },
    { value: '500k+', description: 'Job Postings' },
    { value: '92%', description: 'Success Rate' }
  ];
  
  steps = [
    { step: 1, title: 'Create Profile', description: 'Sign up and build your profile with your experience and preferences' },
    { step: 2, title: 'AI Matching', description: 'Our AI matches you with suitable positions based on your skills' },
    { step: 3, title: 'Apply & Connect', description: 'Apply directly to jobs that match your qualifications' }
  ];
  
  features = [
    { icon: 'ai', title: 'AI-Powered Matching', description: 'Our advanced AI technology pairs your skills, interests and preferences with compatible job opportunities' },
    { icon: 'skills', title: 'Skills Development', description: 'Get personalized recommendations for skills to develop based on your career goals' },
    { icon: 'career', title: 'Career Path Planning', description: 'Visualize potential career trajectories with our AI-powered planning tool' },
    { icon: 'track', title: 'Application Tracking', description: 'Monitor all your job applications in one organized dashboard with real-time status updates' },
    { icon: 'interview', title: 'Interview Prep', description: 'Access customized interview preparation resources tailored to specific positions' },
    { icon: 'employer', title: 'Employer Matching', description: 'Companies specifically seeking your combination of skills will be highlighted' }
  ];
  
  testimonials = [
    { name: 'Michael Johnson', position: 'Senior Developer', text: 'JobMatcher found me a job that perfectly matched my skills and preferences in just two weeks!', stars: 5 },
    { name: 'Sarah Lee', position: 'Marketing Manager', text: 'The AI matching technology really works. I received offers from companies that were ideal for my career goals.', stars: 5 },
    { name: 'James Peters', position: 'UI/UX Designer', text: 'I was impressed by how accurately JobMatcher identified positions that aligned with my expertise and interests.', stars: 5 }
  ];
}