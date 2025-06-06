import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoreServicesComponent } from './components/core-services/core-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'services',
    component: CoreServicesComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
