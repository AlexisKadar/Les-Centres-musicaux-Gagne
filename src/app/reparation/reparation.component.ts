import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-reparation",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./reparation.component.html",
	styleUrl: "./reparation.component.css",
})
export class ReparationComponent {
	services = [
		{
			imageUrl: "https://media.istockphoto.com/id/517156084/photo/artisan-lute-maker-fixing-stringed-instrument-replacing-guitar-c.jpg?s=612x612&w=0&k=20&c=bI2HPUEEW5RnyB8yMPTx_4v2IUHo3pQPIFdKjf2pIME=",
			title: "Réparation Mineur",
			price: "20$"
		},
		{
			imageUrl: "https://static01.nyt.com/images/2018/04/22/nyregion/22JOINT1/22JOINT1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
			title: "Réparation Modeste",
			price: "30$"
		},
		{
			imageUrl: "https://www.benningviolins.com/images/ARTICLE_ART/2016/10-25_13_MTM_Benning_Violins-527.png",
			title: "Réparation Totale",
			price: "40$"
		}
	];
}
