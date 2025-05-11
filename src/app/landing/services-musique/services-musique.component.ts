import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-services-musique",
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: "./services-musique.component.html",
	styleUrl: "./services-musique.component.css",
})
export class ServicesMusiqueComponent {
	services = [
		{
			imageUrl: "https://i0.wp.com/www.rufusguitarshop.com/wp-content/uploads/2024/07/120423IMG_7979.jpg?fit=2700%2C1800&ssl=1",
			title: "Achat d'Instrument",
			description:
				"Nous proposons une large gamme d'instruments de musique, allant des guitares aux pianos, en passant par les batteries et les synthétiseurs. Que vous soyez débutant ou musicien confirmé, nous avons l'instrument qu'il vous faut.",
		},
		{
			imageUrl: "https://itemm.fr/itemm/wp-content/uploads/2023/02/cap-instruments-a-vent-jpeg.webp",
			title: "Réparation d'Instrument",
			description:
				"Notre équipe de techniciens expérimentés assure la réparation et l'entretien de tous types d'instruments de musique. Nous garantissons un service professionnel et rapide pour que votre instrument retrouve sa sonorité optimale.",
		},
		{
			imageUrl:
				"https://www.anacours-musique.com/wp-content/uploads/2023/03/professeurs-comment-se-preparer-a-un-premier-cours_blog.png",
			title: "Cours de Musique",
			description:
				"Nos professeurs qualifiés offrent des cours adaptés à tous les niveaux et tous les âges. Du débutant au musicien avancé, nous vous accompagnons dans votre apprentissage musical avec des méthodes pédagogiques personnalisées.",
		},
		{
			imageUrl:
				"https://gazette.gibson.com/wp-content/uploads/2023/05/gibson-les-paul-models-everything-you-need-to-know2_1030.jpg",
			title: "Location d'Instrument",
			description:
				"Découvrez notre service de location d'instruments de qualité pour tous vos besoins. Une solution économique idéale pour débuter la musique ou pour des projets temporaires, avec des options de location flexibles et adaptées à votre budget.",
		},
	];
}
