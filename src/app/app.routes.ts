import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { AchatComponent } from './achat/achat.component';
import { ReparationComponent } from './reparation/reparation.component';
import { CoursComponent } from './cours/cours.component';
import { LayoutComponent } from './components/global/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'services', component: ServicesComponent },
      { path: 'achat', component: AchatComponent },
      { path: 'reparation', component: ReparationComponent },
      { path: 'cours', component: CoursComponent }
    ]
  }

];
