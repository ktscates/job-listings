import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../model/job';

@Component({
  selector: 'job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input() job!: Job
}
