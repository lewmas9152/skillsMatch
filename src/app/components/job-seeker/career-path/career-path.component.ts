import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-career-path',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './career-path.component.html',
  styleUrls: ['./career-path.component.css']
})
export class CareerPathComponent {
  careerPath = {
    currentPath: 'Frontend Developer - Senior - Lead - Architect',
    progress: 65
  };

  skillsGrowth = [
    { name: 'React.js', progress: 80 },
    { name: 'TypeScript', progress: 65 },
    { name: 'JavaScript', progress: 80 },
    { name: 'CSS/Sass', progress: 65 },
    { name: 'Redux', progress: 75 }
  ];

  recommendedCourses = [
    { title: 'Advanced React Patterns', hours: 6, level: 'intermediate' },
    { title: 'Advanced React Patterns', hours: 6, level: 'intermediate' },
    { title: 'Advanced React Patterns', hours: 6, level: 'intermediate' }
  ];

  milestones = [
    { title: 'Frontend Developer', year: '2023', status: 'Achieved', current: false },
    { title: 'Senior Developer', year: '2023', status: 'In Progress', current: true },
    { title: 'Lead Developer', year: '2023', status: 'not-achieved', current: false },
    { title: 'Frontend Architect', year: '2023', status: 'not-achieved', current: false },
    { title: 'Engineering Director', year: '2023', status: 'not-achieved', current: false }
  ];
}