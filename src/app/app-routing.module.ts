import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./components/core-services/core-services.component').then(m => m.CoreServicesComponent)
  },
  {
    path: 'why-choose-us',
    loadComponent: () => import('./components/why-choose-us/why-choose-us.component').then(m => m.WhyChooseUsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 