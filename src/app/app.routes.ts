import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'services', component: ServicesComponent }
];
