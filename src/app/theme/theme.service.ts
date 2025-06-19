import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = 'theme';
  private availableThemes = [
    'light',
    'dark'
  ]; // DaisyUI default themes

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): string {
    return localStorage.getItem(this.themeKey) || this.availableThemes[0];
  }

  toggleTheme() {
    const current = this.getTheme();
    const idx = this.availableThemes.indexOf(current);
    const next = this.availableThemes[(idx + 1) % this.availableThemes.length];
    this.setTheme(next);
  }

  loadTheme() {
    this.setTheme(this.getTheme());
  }

  getAvailableThemes() {
    return this.availableThemes;
  }
} 