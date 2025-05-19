import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [RouterLink, CommonModule, NgOptimizedImage],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
	@Input() isDark = false;

	links = [
		{
			href: "/",
			label: "Accueil",
		},
		{
			href: "/temoignages",
			label: "Témoignages",
		},
		{
			href: "/succursales",
			label: "Succursales",
		}
	];
	services = [
		{
			href: "/location",
			label: "Location D'instruments",
		},
		{
			href: "/achat",
			label: "Achat D'instruments",
		},
		{
			href: "/cours",
			label: "Cours de Musique",
		},
		{
			href: "/reparation",
			label: "Réparation D'instruments",
		}
	];

}
