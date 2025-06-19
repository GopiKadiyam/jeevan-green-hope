import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-timeline',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  template: `
    <div class="max-w-3xl mx-auto px-8 py-12 animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">{{ 'EVENTS.TITLE' | translate }}</h2>
      <ul class="timeline timeline-vertical">
        <li *ngFor="let event of events">
          <div class="timeline-start font-semibold">{{ event.date }}</div>
          <div class="timeline-middle">
            <span class="badge badge-primary"></span>
          </div>
          <div class="timeline-end">
            <div class="text-lg font-semibold">{{ event.title }}</div>
            <div class="text-sm text-gray-500">{{ event.location }}</div>
          </div>
        </li>
      </ul>
    </div>
  `
})
export class EventsTimelineComponent implements OnInit {
  events: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('assets/data/events.json').subscribe(data => this.events = data);
  }
} 