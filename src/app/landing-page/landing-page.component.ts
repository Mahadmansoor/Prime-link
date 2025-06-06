import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { CoreServicesComponent } from '../components/core-services/core-services.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [
    CommonModule,
    RouterModule,
    AboutUsComponent,
    CoreServicesComponent,
    WhyChooseUsComponent,
    ContactUsComponent
  ]
})
export class LandingPageComponent {
  isSidebarOpen = false;

  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('services') servicesSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  scrollToSection(section: string): void {
    let targetElement: ElementRef | undefined;
    
    switch(section) {
      case 'home':
        targetElement = this.homeSection;
        break;
      case 'about':
        targetElement = this.aboutSection;
        break;
      case 'services':
        targetElement = this.servicesSection;
        break;
      case 'contact':
        targetElement = this.contactSection;
        break;
    }

    if (targetElement) {
      targetElement.nativeElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
