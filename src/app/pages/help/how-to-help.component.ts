import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-how-to-help',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <div class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8">{{ 'TITLE' | translate }}</h2>
      <div class="flex flex-col md:flex-row gap-8 justify-center">
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">{{ 'VOLUNTEER' | translate }}</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">{{ 'VOLUNTEER_DESC' | translate }}</p>
        </div>
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">{{ 'DONATE' | translate }}</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">{{ 'DONATE_DESC' | translate }}</p>
        </div>
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">{{ 'AWARENESS' | translate }}</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">{{ 'AWARENESS_DESC' | translate }}</p>
        </div>
      </div>
    </div>
  `
})
export class HowToHelpComponent {} 