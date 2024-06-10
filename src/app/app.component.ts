import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { JOBS } from '../data';
import { Job } from './model/job';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobCardComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jobs-listing';
  jobs = JOBS;
  filteredJobs = JOBS;
  filters: { languages: string[]; tools: string[] } = {
    languages: [],
    tools: [],
  };

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
    this.filteredJobs();
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
    this.filteredJobs();
  }

  clearFilters() {
    this.filters.languages = [];
    this.filters.tools = [];
    this.filterJobs();
  }

  filterJobs() {
    if (
      this.filters.languages.length === 0 &&
      this.filters.tools.length === 0
    ) {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter((job: Job) => {
        const matchesLanguages = this.filters.languages.every((lang) =>
          job.languages.includes(lang)
        );
        const matchesTools = this.filters.tools.every((tool) =>
          job.tools.includes(tool)
        );
        return matchesLanguages && matchesTools;
      });
    }
  }
}
