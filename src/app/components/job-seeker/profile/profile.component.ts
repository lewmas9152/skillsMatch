// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [ ReactiveFormsModule,NavigationComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../../../styles.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  profileCompleteness = 80;
  experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechnoCorp Inc',
      location: 'San Francisco, CA',
      startDate: 'Jan 2020',
      endDate: 'Present',
      duration: '3 years'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Boston, MA',
      startDate: 'Mar 2017',
      endDate: 'Dec 2019',
      duration: '2.9 years'
    }
  ];
  
  education = [
    {
      degree: 'Bachelor of Science, Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      years: '2013-2017'
    }
  ];
  
  resumeFileName = 'jessica_smithResume_2023.pdf';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      firstName: ['Jessica', Validators.required],
      lastName: ['Smith', Validators.required],
      dateOfBirth: ['01/15/2002', Validators.required],
      email: ['jessica.smith@example.com', [Validators.required, Validators.email]],
      phone: ['+254 754 345 789', Validators.required],
      location: ['San Francisco, CA, United States', Validators.required],
      professionalSummary: ['A highly motivated and results-oriented project manager with 8+ years of experience in leading cross-functional teams to deliver complex projects on time and within budget, specializing in [Industry/Area of Expertise] with a proven track record of success', Validators.required]
    });
  }

  uploadPhoto(): void {
    // Implement photo upload logic
    console.log('Upload photo clicked');
  }

  addExperience(): void {
    // Implement add experience logic
    console.log('Add experience clicked');
  }

  addEducation(): void {
    // Implement add education logic
    console.log('Add education clicked');
  }

  replaceResume(): void {
    // Implement resume replacement logic
    console.log('Replace resume clicked');
  }

  downloadResume(): void {
    // Implement resume download logic
    console.log('Download resume clicked');
  }
}