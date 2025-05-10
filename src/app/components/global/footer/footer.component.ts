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
				{ title: "Services Offerts", url: "/location" },
				{ title: "Témoignages", url: "/temoignages" },
			],
		},
		{
			title: "Services",
			links: [
				{ title: "Service A", url: "/" },
				{ title: "Service B", url: "/" },
				{ title: "Service C", url: "/" },
			],
		},
		{
			title: "Mentions légales",
			links: [
				{ title: "Conditions d'utilisation", url: "/terms" },
				{ title: "Politique de confidentialité", url: "/privacy" },
				{ title: "Politique de cookies", url: "/cookies" },
			],
		},
	];
}
