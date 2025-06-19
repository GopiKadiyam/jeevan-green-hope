import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '../../shared/components/ui-card.component';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [TranslateModule, UiCardComponent,CommonModule],
  template: `
    <div class="max-w-5xl mx-auto px-8 py-12 animate-fade">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">{{ 'PROJECTS.TITLE' | translate }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- <ui-card *ngFor="let project of projects"
          [title]="project.title"
          [image]="project.image"
          [description]="project.description">
        </ui-card> -->
        <ng-container *ngFor="let project of projects">
        <ui-card
          [title]="project.title"
          [image]="project.image"
          [description]="project.description">
        </ui-card>
     </ng-container>
      </div>
    </div>
  `
})
export class ProjectsGridComponent implements OnInit {
  projects: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any[]>('assets/data/projects.json').subscribe(data => this.projects = data);
  }
} 