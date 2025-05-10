import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ArrowLeft, ArrowRight, LucideAngularModule } from "lucide-angular";

@Component({
	selector: "app-employes",
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: "./employes.component.html",
	styleUrl: "./employes.component.css",
})
export class EmployesComponent {
	currentIndex = 0;

	team = [
		{
			name: "Giselle Gagné",
			role: "Fondatrice",
			image:
				"https://media.istockphoto.com/id/1425797944/fr/photo/portrait-dune-jeune-femme-adulte-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=tkbFdPeEk3U8pgXOJk2mumladbpWJswige292S8gb50=",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Karim Bouzid",
			role: "Co-fondateur",
			image:
				"https://png.pngtree.com/thumb_back/fh260/background/20220927/pngtree-bald-smiling-blue-eyed-man-studio-isolated-white-healthy-adult-photo-image_19997414.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Bruno Bouchard",
			role: "Luthier",
			image:
				"https://png.pngtree.com/thumb_back/fh260/background/20220121/pngtree-real-man-portrait-person-man-serious-photo-image_7986900.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Mélanie Boucher",
			role: "Experte en marketing",
			image:
				"https://img.freepik.com/photos-premium/concept-personnes-femmes-portraits-visage-jeune-femme-souriante-heureuse_380164-119771.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Robert Bouchard",
			role: "Professeur",
			image:
				"https://media.istockphoto.com/id/1313927524/fr/photo/fermez-vous-vers-le-haut-dun-homme-a%C3%AEn%C3%A9-heureux.jpg?s=612x612&w=0&k=20&c=vdBPHYvLGUlNIT2Vqi9Gob1oj7DAgo9rrlPMj0jNZoc=",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Nathalie Hébert",
			role: "Professeure",
			image:
				"https://img.freepik.com/premium-photo/people-female-business-portrait-concept-happy-smiling-young-woman-face_380164-119772.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Alexandre Gagné",
			role: "Luthier",
			image: "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?semt=ais_hybrid&w=740",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Xavier Estienne",
			role: "Luthier",
			image:
				"https://img.freepik.com/photos-gratuite/bel-homme-souriant-portrait-visage-heureux-se-bouchent_53876-146189.jpg?semt=ais_hybrid&w=740",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Bob Johnson",
			role: "Professeur",
			image:
				"https://media.istockphoto.com/id/1313461425/fr/photo/headshot-de-lhomme-a%C3%AEn%C3%A9-amical.jpg?s=612x612&w=0&k=20&c=L62ez83fzYxcilnjT4nOo_TbVQ5iUQaDe9wtDebv0tQ=",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		// Tu peux en ajouter plus ici
	];

	get maxIndex(): number {
		return Math.ceil(this.team.length / 3) - 1;
	}

	next() {
		this.currentIndex = this.currentIndex + 1 > this.maxIndex ? 0 : this.currentIndex + 1;
	}

	prev() {
		this.currentIndex = this.currentIndex - 1 < 0 ? this.maxIndex : this.currentIndex - 1;
	}

	protected readonly ArrowLeft = ArrowLeft;
	protected readonly ArrowRight = ArrowRight;
}
