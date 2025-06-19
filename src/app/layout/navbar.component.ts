import { Component } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { LanguageService } from '../language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <nav class="navbar sticky top-0 z-50 bg-base-100 shadow-md px-8 py-4 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <img src="assets/images/logo.png" alt="Logo" class="h-10 w-10 rounded-full" />
        <span class="font-bold text-xl tracking-tight">Jeevan Green Hope</span>
      </div>
      <ul class="hidden md:flex gap-8 font-medium">
        <li><a href="#hero" class="hover:underline">{{ 'NAV.HOME' | translate }}</a></li>
        <li><a href="#about" class="hover:underline">{{ 'NAV.ABOUT' | translate }}</a></li>
        <li><a href="#projects" class="hover:underline">{{ 'NAV.PROJECTS' | translate }}</a></li>
        <li><a href="#gallery" class="hover:underline">{{ 'NAV.GALLERY' | translate }}</a></li>
        <li><a href="#events" class="hover:underline">{{ 'NAV.EVENTS' | translate }}</a></li>
        <li><a href="#help" class="hover:underline">{{ 'NAV.HELP' | translate }}</a></li>
        <li><a href="#contact" class="hover:underline">{{ 'NAV.CONTACT' | translate }}</a></li>
      </ul>
      <div class="flex items-center gap-2">
        <button class="btn btn-ghost btn-circle" (click)="toggleLightDark()" title="Toggle theme">
          <span *ngIf="theme.getTheme() === 'dark'">🌞</span>
          <span *ngIf="theme.getTheme() !== 'dark'">🌙</span>
        </button>
        <select class="select select-bordered select-sm" [value]="language.getLanguage()" #langSel (change)="language.setLanguage(langSel.value)">
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="te">TE</option>
        </select>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  constructor(public theme: ThemeService, public language: LanguageService) {}

  toggleLightDark() {
    const current = this.theme.getTheme();
    this.theme.setTheme(current === 'dark' ? 'light' : 'dark');
  }
} 