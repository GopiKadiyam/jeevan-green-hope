import { Component } from '@angular/core';
import { HeroSectionComponent } from './pages/hero-section.component';
import { AboutSectionComponent } from './pages/about-section.component';
import { ProjectsGridComponent } from './pages/projects-grid.component';
import { GalleryComponent } from './pages/gallery.component';
import { EventsTimelineComponent } from './pages/events-timeline.component';
import { HowToHelpComponent } from './pages/how-to-help.component';
import { ContactUsComponent } from './pages/contact-us.component';
import { FooterComponent } from './layout/footer.component';
import { NavbarComponent } from './layout/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsGridComponent,
    GalleryComponent,
    EventsTimelineComponent,
    HowToHelpComponent,
    ContactUsComponent,
    FooterComponent
  ],
  template: `
    <app-navbar />
    <section id="hero"><app-hero-section /></section>
    <section id="about"><app-about-section /></section>
    <section id="projects"><app-projects-grid /></section>
    <section id="gallery"><app-gallery /></section>
    <section id="events"><app-events-timeline /></section>
    <section id="help"><app-how-to-help /></section>
    <section id="contact"><app-contact-us /></section>
    <footer id="footer"><app-footer /></footer>
  `
})
export class HomeComponent {} 