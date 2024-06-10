import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-display',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() filters!: { languages: string[]; tools: string[] };
  @Output() removeFilter = new EventEmitter<{
    type: 'language' | 'tool';
    value: string;
  }>();
  @Output() clearFilters = new EventEmitter<void>();

  remove(type: 'language' | 'tool', value: string) {
    this.removeFilter.emit({ type, value });
  }

  clear() {
    this.clearFilters.emit();
  }
}
