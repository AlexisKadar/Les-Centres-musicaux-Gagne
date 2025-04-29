import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = [
    {
      href: "/",
      label: "Accueil",
    },
    {
      href: "/services",
      label: "Services Offerts",
    },
    {
      href: "/temoignages",
      label: "Témoignages",
    },
  ];
}
