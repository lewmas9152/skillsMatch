// system-configuration.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.component.html',
  styleUrls: ['./system-configuration.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavigationComponent]
})
export class SystemConfigurationComponent {
  // AI Parameters form data
  skillMatchingWeight: number = 70;
  experienceWeight: number = 40;
  educationWeight: number = 25;
  locationWeight: number = 30;
  minimumMatchThreshold: number = 60;
  
  // Selected accuracy vs coverage option
  selectedAccuracyOption: 'coverage' | 'balanced' | 'accuracy' = 'balanced';

  setAccuracyOption(option: 'coverage' | 'balanced' | 'accuracy'): void {
    this.selectedAccuracyOption = option;
  }

  saveChanges(): void {
    // Implement save functionality
    console.log('Settings saved', {
      skillMatchingWeight: this.skillMatchingWeight,
      experienceWeight: this.experienceWeight,
      educationWeight: this.educationWeight,
      locationWeight: this.locationWeight,
      minimumMatchThreshold: this.minimumMatchThreshold,
      accuracyOption: this.selectedAccuracyOption
    });
    // Here you would typically call a service to save these settings
  }
}