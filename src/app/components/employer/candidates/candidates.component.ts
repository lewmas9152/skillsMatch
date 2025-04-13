// candidates.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';

interface Candidate {
  id: number;
  name: string;
  title: string;
  location: string;
  lastActive: string;
  skills: string[];
  matchPercentage: number;
}

@Component({
  selector: 'app-candidates',
  imports:[ReactiveFormsModule, CommonModule, NavigationComponent],
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css', '../employer.component.css'],
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];
  filteredCandidates: Candidate[] = [];
  filterForm: FormGroup;
  totalCandidates: number = 0;
  sortBy: string = 'Best Match';

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      skills: [''],
      experience: [''],
      location: [''],
      education: [''],
      lastActive: ['']
    });
  }

  ngOnInit(): void {
    // Sample data
    this.candidates = [
      {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        lastActive: '2 days ago',
        skills: ['React', 'Redux', 'TypeScript'],
        matchPercentage: 94
      },
      {
        id: 2,
        name: 'Michael Chen',
        title: 'Full Stack Developer',
        location: 'Remote',
        lastActive: 'Today',
        skills: ['React', 'Node.js', 'MongoDB'],
        matchPercentage: 89
      },
      {
        id: 3,
        name: 'David Rodriguez',
        title: 'Frontend Developer',
        location: 'Austin, TX',
        lastActive: '5 days ago',
        skills: ['React', 'Javascript', 'CSS'],
        matchPercentage: 84
      },
      {
        id: 4,
        name: 'David Mugo',
        title: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        lastActive: '2 days ago',
        skills: ['React', 'Redux', 'TypeScript'],
        matchPercentage: 94
      }
    ];

    this.filteredCandidates = [...this.candidates];
    this.totalCandidates = this.candidates.length;
  }

  applyFilters(): void {
    // In a real app, this would make an API call with the filter values
    console.log('Applying filters:', this.filterForm.value);
    
    // For the demo, we'll just log and keep the current candidates
    this.filteredCandidates = [...this.candidates];
    this.totalCandidates = this.filteredCandidates.length;
  }

  onSortChange(event: Event): void {
    this.sortBy = (event.target as HTMLSelectElement).value;
    
    // Sort logic
    if (this.sortBy === 'Best Match') {
      this.filteredCandidates.sort((a, b) => b.matchPercentage - a.matchPercentage);
    } else if (this.sortBy === 'Most Recent') {
      // Just an example - in a real app you'd compare actual dates
      this.filteredCandidates.sort((a, b) => {
        if (a.lastActive === 'Today') return -1;
        if (b.lastActive === 'Today') return 1;
        return parseInt(a.lastActive) - parseInt(b.lastActive);
      });
    } else if (this.sortBy === 'Name A-Z') {
      this.filteredCandidates.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  viewCandidate(candidateId: number): void {
    console.log('Viewing candidate with ID:', candidateId);
    // In a real application, this would navigate to the candidate's detailed profile
  }
}