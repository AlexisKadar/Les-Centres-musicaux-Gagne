import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.css",
})
export class FooterComponent {
	categories = [
		{
			title: "Site Web",
			links: [
				{ title: "Accueil", url: "/" },
				{ title: "Témoignages", url: "/temoignages" },
				{ title: "Succursales", url: "/succursales" }
			],
		},
		{
			title: "Services",
			links: [
				{ title: "Location D'instruments", url: "/location" },
				{ title: "Achat D'instruments", url: "/achat" },
				{ title: "Cours de Musique", url: "/cours" },
				{ title: "Réparation D'instruments", url: "/reparation" },
			],
		},
		{
			title: "Mentions légales",
			links: [
				{ title: "Conditions d'utilisation", url: "" },
				{ title: "Politique de confidentialité", url: "" },
				{ title: "Politique de cookies", url: "" },
			],
		},
	];
}
