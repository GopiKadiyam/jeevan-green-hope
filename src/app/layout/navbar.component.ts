import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { LanguageService } from '../language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Donate', path: '/donate' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Events', path: '/events' },
  { label: 'Help', path: '/help' },
  { label: 'Contact', path: '/contact' }
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule],
  template: `
    <nav [ngClass]="{
            'bg-transparent shadow-none': isTransparent,
            'bg-base-100 shadow-md': !isTransparent
          }"
         class="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <img src="assets/images/logo.png" alt="Logo" class="h-10 w-10 rounded-full" />
        <span [ngClass]="isTransparent ? 'text-white font-extrabold' : 'text-black font-extrabold'" class="tracking-tight text-xl md:text-2xl">Jeevan Green Hope</span>
      </div>
      <!-- Desktop Nav -->
      <ul class="hidden md:flex gap-4 font-medium items-center">
        <ng-container *ngFor="let link of navLinks.slice(0, 5)">
          <li>
            <a [routerLink]="link.path" routerLinkActive="active"
               [ngClass]="isTransparent ? 'text-white font-extrabold' : 'text-black font-extrabold'"
               class="hover:underline">
              {{ link.label }}
            </a>
          </li>
        </ng-container>
        <li class="relative group">
          <button class="hover:underline flex items-center"
            [ngClass]="isTransparent ? 'text-white font-extrabold' : 'text-black font-extrabold'">
            View More <span class="ml-1">▼</span>
          </button>
          <ul class="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
            <ng-container *ngFor="let link of navLinks.slice(5)">
              <li>
                <a [routerLink]="link.path" routerLinkActive="active"
                   [ngClass]="isTransparent ? 'text-black font-extrabold' : 'text-black font-extrabold'"
                   class="block px-4 py-2 hover:bg-base-200">
                  {{ link.label }}
                </a>
              </li>
            </ng-container>
          </ul>
        </li>
      </ul>
      <!-- Mobile Nav -->
      <div class="md:hidden dropdown dropdown-end">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <ng-container *ngFor="let link of navLinks">
            <li>
              <a [routerLink]="link.path" routerLinkActive="active"
                 [ngClass]="isTransparent ? 'text-black font-extrabold' : 'text-black font-extrabold'">
                {{ link.label }}
              </a>
            </li>
          </ng-container>
        </ul>
      </div>
      <div class="flex items-center gap-2 ml-2">
        <button class="btn btn-ghost btn-circle"
                [ngClass]="isTransparent ? 'text-white' : 'text-black'"
                (click)="toggleLightDark()" title="Toggle theme">
          <span *ngIf="theme.getTheme() === 'dark'">🌞</span>
          <span *ngIf="theme.getTheme() !== 'dark'">🌙</span>
        </button>
        <select class="select select-bordered select-sm"
                [ngClass]="isTransparent ? 'text-white bg-black bg-opacity-80 border-white' : 'text-black bg-white border-black'"
                [value]="language.getLanguage()" #langSel (change)="onLanguageChange(langSel.value)">
          <option value="en" style="font-family: 'Inter', sans-serif;">EN</option>
          <option value="hi" style="font-family: 'Noto Sans Devanagari', 'Mangal', sans-serif;">हिंदी</option>
          <option value="te" style="font-family: 'Noto Sans Telugu', 'Gautami', sans-serif;">తెలుగు</option>
        </select>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isTransparent = true;
  navLinks = NAV_LINKS;
  constructor(public theme: ThemeService, public language: LanguageService,
     private router: Router) {
    this.router.events.subscribe(() => {
      this.updateNavbarTransparency();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarTransparency();
  }

  updateNavbarTransparency() {
    // Transparent only on home route and at top of page
    const isHome = this.router.url === '/';
    this.isTransparent = isHome && window.scrollY < 80;
  }

  toggleLightDark() {
    const current = this.theme.getTheme();
    this.theme.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  onLanguageChange(lang: string) {
    this.language.setLanguage(lang);
    window.location.reload();
  }
} 