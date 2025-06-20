import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    TranslateModule
  ],
  template: `
    <section id="hero" class="relative min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center px-4 md:px-8 py-20 text-center" style="background-image: url('assets/images/hero-bg.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg leading-tight">{{ 'TAGLINE' | translate }}</h1>
        <p class="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">{{ 'SUBTITLE' | translate }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a routerLink="/donate" class="btn btn-primary text-lg px-8 py-3 rounded-xl shadow-lg">{{ 'DONATE_CTA' | translate }}</a>
          <button (click)="showVideo = true" class="btn btn-outline text-lg px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            {{ 'WATCH_VIDEO' | translate }}
          </button>
        </div>

        <div class="w-full max-w-2xl mx-auto mt-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div class="bg-yellow-400 bg-opacity-90 rounded-xl p-4">
              <div class="text-2xl font-bold">190+</div>
              <div class="text-sm">{{ 'IMPACT_COUNTRIES' | translate }}</div>
            </div>
            <div class="bg-yellow-400 bg-opacity-90 rounded-xl p-4">
              <div class="text-2xl font-bold">10,000+</div>
              <div class="text-sm">{{ 'IMPACT_CHILDREN' | translate }}</div>
            </div>
            <div class="bg-yellow-400 bg-opacity-90 rounded-xl p-4">
              <div class="text-2xl font-bold">50+</div>
              <div class="text-sm">{{ 'IMPACT_PROJECTS' | translate }}</div>
            </div>
          </div>
        </div>
        
      </div>
      <div *ngIf="showVideo" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div class="relative w-full max-w-3xl aspect-video">
          <button (click)="showVideo = false" class="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow-lg z-10">
            <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <iframe width="100%" height="100%" class="w-full h-full rounded-xl" src="https://www.youtube.com/embed/mPRXhNFPgwo?autoplay=1" title="Jeevan Green Hope Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    
    <section id="about" class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
      <p class="text-lg md:text-xl mb-6">Empowering communities for a greener tomorrow.</p>
      <p class="text-base md:text-lg text-gray-500 dark:text-gray-300">Our mission is to inspire, educate, and mobilize people to protect the environment and support sustainable development.</p>
    </section>
    <section id="projects" class="max-w-5xl mx-auto px-8 py-12 animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">Tree Plantation</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">Join our tree plantation drives to make your city greener.</p>
        </div>
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">Clean Water Initiative</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">Providing access to clean and safe drinking water in rural areas.</p>
        </div>
      </div>
    </section>
    <section id="donate" class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">Donate</h2>
      <p class="text-lg md:text-xl mb-6">Support our mission by making a donation. Every contribution counts!</p>
      <button class="btn btn-success text-lg px-8 py-3 rounded-xl shadow-lg">Donate Now</button>
    </section>
    <section id="blogs" class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">Blogs</h2>
      <p class="text-lg md:text-xl mb-6">Read inspiring stories and updates from our community.</p>
      <a routerLink="/blogs" class="btn btn-outline">View All Blogs</a>
    </section>
    <section id="gallery" class="max-w-5xl mx-auto px-8 py-12 animate-fade text-center">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8">Gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <img src="assets/images/gallery1.jpg" alt="Gallery image 1" class="rounded-xl h-32 w-full object-cover" />
        <img src="assets/images/gallery2.jpg" alt="Gallery image 2" class="rounded-xl h-32 w-full object-cover" />
        <img src="assets/images/gallery3.jpg" alt="Gallery image 3" class="rounded-xl h-32 w-full object-cover" />
        <img src="assets/images/gallery4.jpg" alt="Gallery image 4" class="rounded-xl h-32 w-full object-cover" />
      </div>
      <a routerLink="/gallery" class="btn btn-primary">View More</a>
    </section>
    <section id="events" class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">Events</h2>
      <p class="text-lg md:text-xl mb-6">Check out our upcoming and past events.</p>
      <a routerLink="/events" class="btn btn-outline">View All Events</a>
    </section>
    <section id="help" class="max-w-3xl mx-auto px-8 py-12 text-center animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-4">How to Help</h2>
      <div class="flex flex-col md:flex-row gap-8 justify-center">
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">Volunteer</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">Join our team and make a difference in your community.</p>
        </div>
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">Donate</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">Support our projects with your generous donations.</p>
        </div>
        <div class="card bg-base-100 shadow-xl rounded-xl p-6 flex-1">
          <h3 class="text-xl font-semibold mb-2">Spread Awareness</h3>
          <p class="text-base text-gray-600 dark:text-gray-300">Help us reach more people by spreading the word.</p>
        </div>
      </div>
    </section>
    <section id="contact" class="max-w-3xl mx-auto px-8 py-12 animate-fade text-center">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8">Contact Us</h2>
      <div class="text-lg mb-4">
        <div><span class="font-semibold">Address:</span> 123 Green Hope Lane, Hyderabad, Telangana</div>
        <div><span class="font-semibold">Phone:</span> +91 98765 43210</div>
        <div><span class="font-semibold">Email:</span> info&#64;jeevangreenhope.org</div>
      </div>
      <iframe class="rounded-xl shadow-md w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406123456789!2d78.486671315357!3d17.3850440880801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977b0e8a7b0d%3A0x7d0b0b0b0b0b0b0b!2sHyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <footer id="footer"><app-footer /></footer>
  `
})
export class HomeComponent {
  showVideo = false;
} 