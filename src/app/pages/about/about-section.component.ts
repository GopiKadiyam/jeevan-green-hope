import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <div class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">{{ 'ABOUT.TITLE' | translate }}</h2>
      <p class="text-lg md:text-xl mb-6">{{ 'ABOUT.VISION' | translate }}</p>
      <p class="text-base md:text-lg text-gray-500 dark:text-gray-300">{{ 'ABOUT.MISSION' | translate }}</p>
    </div>
  `
})
export class AboutSectionComponent {} 