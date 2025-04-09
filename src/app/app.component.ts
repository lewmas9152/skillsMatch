import { Component } from '@angular/core';

import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { EmployerComponent } from './components/employer/employer.component';

@Component({
  selector: 'app-root',
  imports: [JobSeekerComponent, EmployerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skillsMatch';
}
