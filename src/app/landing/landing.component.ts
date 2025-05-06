import { Component } from '@angular/core';
import { HeroComponent } from '../components/global/hero/hero.component';
import { EmployesComponent } from '../components/global/employes/employes.component';
import { ServicesMusiqueComponent } from '../components/global/services-musique/services-musique.component';
import { CommentairesComponent } from '../components/global/commentaires/commentaires.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, EmployesComponent, ServicesMusiqueComponent, CommentairesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
