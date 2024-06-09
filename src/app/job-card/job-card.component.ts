import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'job-card',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent implements OnInit {
  @Input() job!: Job;

  @Input() jobs: Job[] = [];

  filters: { languages: string[]; tools: string[] } = {
    languages: [],
    tools: [],
  };
  filteredJobs: Job[] = [];

  ngOnInit() {
    this.filteredJobs = this.jobs;
  }

  addFilter(type: 'language' | 'tool', value: string) {
    if (type === 'language') {
      if (!this.filters.languages.includes(value)) {
        this.filters.languages.push(value);
      }
    } else if (type === 'tool') {
      if (!this.filters.tools.includes(value)) {
        this.filters.tools.push(value);
      }
    }
    this.applyFilters();
  }

  removeFilter(event: { type: 'language' | 'tool'; value: string }) {
    if (event.type === 'language') {
      this.filters.languages = this.filters.languages.filter(
        (lang) => lang !== event.value
      );
    } else if (event.type === 'tool') {
      this.filters.tools = this.filters.tools.filter(
        (tool) => tool !== event.value
      );
    }
    this.applyFilters();
  }

  clearFilters() {
    this.filters.languages = [];
    this.filters.tools = [];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredJobs = this.jobs.filter((job) => {
      const matchesLanguages = this.filters.languages.every((lang) =>
        job.languages.includes(lang)
      );
      const matchesTools = this.filters.tools.every((tool) =>
        job.tools.includes(tool)
      );
      return matchesLanguages && matchesTools;
    });
  }

  // Helper method to join array elements into a single string for display
  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
