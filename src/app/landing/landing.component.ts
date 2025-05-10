import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HistoryComponent } from './history/history.component';
import { EmployesComponent } from './employes/employes.component';
import { ServicesMusiqueComponent } from './services-musique/services-musique.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { TrioIconsComponent } from '../components/trio-icons/trio-icons.component';
import { NavbarComponent } from '../components/global/navbar/navbar.component';
import { FooterComponent } from '../components/global/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HistoryComponent, EmployesComponent, ServicesMusiqueComponent, CommentairesComponent, NavbarComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
