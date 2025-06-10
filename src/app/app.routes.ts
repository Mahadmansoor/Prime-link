import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./components/core-services/core-services.component').then(m => m.CoreServicesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
