// skills.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  imports: [CommonModule, FormsModule, NavigationComponent], // Add necessary imports here
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  targetRole: string = 'Senior Frontend Developer';
  skillGaps: any[] = [
    { name: 'React Proficiency', percentage: 90 },
    { name: 'TypeScript', percentage: 70 }
  ];
  
  recommendedSkills: string[] = ['GraphQL', 'GraphQL', 'Performance Optimization'];
  
  currentSkills: any[] = [
    { name: 'React.js', experience: '5+ years experience', proficiency: 90, level: 'Expert' },
    { name: 'JavaScript', experience: '5+ years experience', proficiency: 85, level: 'Expert' },
    { name: 'TypeScript', experience: '3 years experience', proficiency: 75, level: 'Intermediate' },
    { name: 'CSS/Sass', experience: '5+ years experience', proficiency: 80, level: 'Advanced' },
    { name: 'Redux', experience: '4+ years experience', proficiency: 80, level: 'Advanced' },
    { name: 'Node.js', experience: '3+ years experience', proficiency: 70, level: 'Intermediate' }
  ];
  
  selectedSkillCategory: string = 'Technical';
  skillCategories: string[] = ['Technical', 'Soft Skills', 'Languages', 'Certifications', 'Tools'];
  
  searchSkill: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  selectCategory(category: string): void {
    this.selectedSkillCategory = category;
  }
  
  addSkill(): void {
    // Logic to add a new skill would go here
    this.searchSkill = '';
  }
}