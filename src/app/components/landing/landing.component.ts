import { Component } from '@angular/core';
import { HeroComponent } from '../global/hero/hero.component';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HistoryComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
