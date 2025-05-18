import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule, NgClass } from '@angular/common';
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
    AboutUsComponent,
    CoreServicesComponent,
    WhyChooseUsComponent,
    ContactUsComponent
  ]
})
export class LandingPageComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  scrollToTop(): void {
    // Prevent default anchor behavior
    event?.preventDefault();
    
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
