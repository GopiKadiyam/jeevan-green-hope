import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <div class="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center px-8 py-20 text-center" style="background-image: url('assets/images/hero-bg.jpg');">
      <h1 class="text-4xl md:text-6xl font-semibold mb-6 text-white drop-shadow-lg">{{ 'HERO.TAGLINE' | translate }}</h1>
      <button class="btn btn-primary text-lg px-8 py-3 rounded-xl shadow-lg animate-fade">{{ 'HERO.CTA' | translate }}</button>
    </div>
  `
})
export class HeroSectionComponent {} 