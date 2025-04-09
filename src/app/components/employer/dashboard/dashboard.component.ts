import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName = 'John';
  
  stats = [
    { title: 'Active Jobs', value: 12 },
    { title: 'Total Applications', value: 143 },
    { title: 'Upcoming Interviews', value: 7 },
    { title: 'Completed Interviews', value: 30 }
  ];

  pipeline = [
    { stage: 'Applied', count: 87, color: '#3b82f6' },
    { stage: 'Screening', count: 43, color: '#22c55e' },
    { stage: 'Interview', count: 23, color: '#f59e0b' },
    { stage: 'Offer', count: 9, color: '#f43f5e' }
  ];

  recentApplications = [
    { name: 'Sarah Johnson', position: 'Senior Developer', avatar: '' },
    { name: 'David Miller', position: 'UX Designer', avatar: '' },
    { name: 'James Wilson', position: 'Product Manager', avatar: '' },
    { name: 'Emily Davis', position: 'Marketing Specialist', avatar: '' }
  ];

  interviewDates = [
    { date: 'Today', day: '' },
    { date: 'April 8', day: '' },
    { date: 'April 9', day: '' },
    { date: 'April 10', day: '' },
    { date: 'April 11', day: '' }
  ];

  interviews = [
    { time: '10:00 AM', name: 'Mark Thompson', position: 'UI/UX Designer', date: 'Today' },
    { time: '4:00 PM', name: 'Brian Lee', position: 'Product Manager', date: 'Today' },
    { time: '2:30 PM', name: 'Lisa Johnson', position: 'Web Developer', date: 'April 8' },
    { time: '11:00 AM', name: 'Ryan Cooper', position: 'Data Analyst', date: 'April 9' },
    { time: '3:00 PM', name: 'Amy Wilson', position: 'UI/UX Designer', date: 'April 10' }
  ];

  getInterviewsByDate(date: string) {
    return this.interviews.filter(interview => interview.date === date);
  }

  getMaxPipelineCount() {
    return Math.max(...this.pipeline.map(item => item.count));
  }
}