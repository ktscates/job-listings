import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { JOBS } from '../data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jobs-listing';

  jobs = JOBS;
}
