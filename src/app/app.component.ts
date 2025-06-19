import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  template: `
    <app-navbar />
    <router-outlet />
  `
})
export class AppComponent {
  title = 'jeevan-green-hope';
}
