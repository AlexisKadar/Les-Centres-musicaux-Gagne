import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HistoryComponent } from './history/history.component';
import { EmployesComponent } from './employes/employes.component';
import { ServicesMusiqueComponent } from './services-musique/services-musique.component';
import { CommentairesComponent } from './commentaires/commentaires.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HistoryComponent, EmployesComponent, ServicesMusiqueComponent, CommentairesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
