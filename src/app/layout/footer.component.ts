import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="w-full py-8 px-8 bg-base-200 text-base-content flex flex-col md:flex-row items-center justify-between gap-4 animate-fade">
      <div class="text-center md:text-left">
        <div class="font-semibold text-lg">Jeevan Green Hope Society Trust</div>
        <div class="text-sm">&copy; 2024 All rights reserved.</div>
      </div>
      <div class="flex gap-4">
        <a href="#" aria-label="Facebook" class="btn btn-ghost btn-circle"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter" class="btn btn-ghost btn-circle"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" aria-label="Instagram" class="btn btn-ghost btn-circle"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div class="flex gap-2 items-center">
        <!-- Theme and language switchers will go here -->
        <button class="btn btn-outline btn-sm">🌗</button>
        <select class="select select-bordered select-sm">
          <option>EN</option>
          <option>HI</option>
          <option>TE</option>
        </select>
      </div>
    </footer>
  `
})
export class FooterComponent {} 