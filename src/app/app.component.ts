import { Component } from '@angular/core';

import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';

@Component({
  selector: 'app-root',
  imports: [JobSeekerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skillsMatch';
}
