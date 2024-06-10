import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from '../model/job';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'job-card',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input() job!: Job;
  @Output() addFilter = new EventEmitter<{
    type: 'language' | 'tool';
    value: string;
  }>();

  emitFilter(type: 'language' | 'tool', value: string) {
    this.addFilter.emit({ type, value });
  }
}
