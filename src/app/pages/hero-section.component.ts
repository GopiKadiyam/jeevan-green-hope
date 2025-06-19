import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <div class="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center px-8 py-20 text-center" style="background-image: url('assets/images/hero-bg.jpg');">
      <div class="mb-6 w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe width="100%" height="100%" class="w-full h-full" src="https://www.youtube.com/embed/mPRXhNFPgwo" title="Jeevan Green Hope Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h1 class="text-4xl md:text-6xl font-semibold mb-6 text-white drop-shadow-lg">{{ 'HERO.TAGLINE' | translate }}</h1>
      <button class="btn btn-primary text-lg px-8 py-3 rounded-xl shadow-lg animate-fade">{{ 'HERO.CTA' | translate }}</button>
    </div>
  `
})
export class HeroSectionComponent {} 