import { Component } from '@angular/core';
import { HeroComponent } from '../components/global/hero/hero.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
