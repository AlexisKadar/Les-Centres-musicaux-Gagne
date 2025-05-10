import { Component } from "@angular/core";
import { FooterComponent } from "../components/global/footer/footer.component";
import { NavbarComponent } from "../components/global/navbar/navbar.component";
import { CommentairesComponent } from "./commentaires/commentaires.component";
import { EmployesComponent } from "./employes/employes.component";
import { HeroComponent } from "./hero/hero.component";
import { HistoryComponent } from "./history/history.component";
import { ServicesMusiqueComponent } from "./services-musique/services-musique.component";

@Component({
	selector: "app-landing",
	standalone: true,
	imports: [
		HeroComponent,
		HistoryComponent,
		EmployesComponent,
		ServicesMusiqueComponent,
		CommentairesComponent,
		NavbarComponent,
		FooterComponent,
	],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.css",
})
export class LandingComponent {}
