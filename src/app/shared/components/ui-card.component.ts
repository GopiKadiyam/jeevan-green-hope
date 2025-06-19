import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-base-100 shadow-xl rounded-xl">
      <figure *ngIf="image"><img [src]="image" [alt]="title" class="rounded-t-xl h-48 w-full object-cover" /></figure>
      <div class="card-body">
        <h3 class="card-title text-xl font-semibold">{{ title }}</h3>
        <p class="text-base text-gray-600 dark:text-gray-300">{{ description }}</p>
      </div>
    </div>
  `
})
export class UiCardComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() description = '';
} 