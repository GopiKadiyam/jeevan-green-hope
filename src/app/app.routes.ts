import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutSectionComponent } from './pages/about/about-section.component';
import { ProjectsGridComponent } from './pages/projects/projects-grid.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact/contact-us.component';
import { EventsTimelineComponent } from './pages/events/events-timeline.component';
import { HowToHelpComponent } from './pages/help/how-to-help.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutSectionComponent },
  { path: 'projects', component: ProjectsGridComponent },
  // { path: 'donate', component: DonatesComponent },
  // { path: 'blogs', component: BlogsComponent },  
  { path: 'gallery', component: GalleryComponent },
  { path: 'events', component: EventsTimelineComponent },
  { path: 'help', component: HowToHelpComponent },
  { path: 'contact', component: ContactUsComponent },

  { path: '**', redirectTo: '' }
];
