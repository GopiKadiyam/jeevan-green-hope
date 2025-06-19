import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  template: `
    <div class="max-w-3xl mx-auto px-8 py-12 animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">{{ 'CONTACT.TITLE' | translate }}</h2>
      <div class="flex flex-col gap-6 items-center">
        <div class="text-lg">
          <div><span class="font-semibold">{{ 'CONTACT.ADDRESS' | translate }}:</span> 123 Green Hope Lane, Hyderabad, Telangana</div>
          <div><span class="font-semibold">{{ 'CONTACT.PHONE' | translate }}:</span> +91 98765 43210</div>
          <div><span class="font-semibold">{{ 'CONTACT.EMAIL' | translate }}:</span> info&#64;jeevangreenhope.org</div>
        </div>
        <iframe class="rounded-xl shadow-md w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406123456789!2d78.486671315357!3d17.3850440880801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977b0e8a7b0d%3A0x7d0b0b0b0b0b0b0b!2sHyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  `
})
export class ContactUsComponent {} 