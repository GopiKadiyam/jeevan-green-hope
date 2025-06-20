import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  template: `
    <div class="max-w-5xl mx-auto px-8 py-12 animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">{{ 'TITLE' | translate }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div *ngFor="let img of images" class="overflow-hidden rounded-xl shadow-md">
          <img [src]="img" alt="Gallery image" class="w-full h-48 object-cover transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<string[]>('assets/data/gallery.json').subscribe(data => this.images = data);
  }
} 