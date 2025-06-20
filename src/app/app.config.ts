import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { routes } from './app.routes';

// Factory for multi-file loader WITHOUT injecting the lang into the prefix
export function HttpLoaderFactory(handler: HttpBackend) {
  return new MultiTranslateHttpLoader(handler, [
    { prefix: `/assets/i18n/`, suffix: `/navbar.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/hero.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/about.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/projects.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/donate.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/blogs.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/gallery.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/events.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/help.json` },
    { prefix: `/assets/i18n/`, suffix: `/home/contact.json` },
    { prefix: `/assets/i18n/`, suffix: `/about.json` },
    { prefix: `/assets/i18n/`, suffix: `/projects.json` },
    { prefix: `/assets/i18n/`, suffix: `/donate.json` },
    { prefix: `/assets/i18n/`, suffix: `/blogs.json` },
    { prefix: `/assets/i18n/`, suffix: `/gallery.json` },
    { prefix: `/assets/i18n/`, suffix: `/events.json` },
    { prefix: `/assets/i18n/`, suffix: `/help.json` }
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend]
        }
      })
    ),
    {
      provide: 'APP_INITIALIZER',
      useFactory: (translate: TranslateService) => () => {
        const browserLang = translate.getBrowserLang() || 'en';
        const lang = browserLang.match(/en|hi|te/) ? browserLang : 'en';
        localStorage.setItem('lang', lang);
        return translate.use(lang).toPromise();
      },
      deps: [TranslateService],
      multi: true
    }
  ]
};
