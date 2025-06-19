import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langKey = 'lang';
  constructor(private translate: TranslateService) {
    this.loadLanguage();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(this.langKey, lang);
  }

  getLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  loadLanguage() {
    const lang = localStorage.getItem(this.langKey) || this.translate.getBrowserLang() || 'en';
    this.setLanguage(['en', 'hi', 'te'].includes(lang) ? lang : 'en');
  }
} 