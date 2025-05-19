import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-achat",
	imports: [CommonModule],
	templateUrl: "./achat.component.html",
	styleUrl: "./achat.component.css",
	standalone: true,
})
export class AchatComponent implements OnInit {
	instruments = [
		{
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/GuitareClassique5.png/330px-GuitareClassique5.png",
			title: "Guitare",
			price: "20$",
		},
		{
			imageUrl:
				"https://static.vecteezy.com/system/resources/previews/049/952/750/non_2x/brass-trumpet-shining-under-bright-studio-lights-cut-out-transparent-png.png",
			title: "Trompette",
			price: "30$",
		},
		{
			imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/330px-Violin_VL100.png",
			title: "Violon",
			price: "40$",
		},
	];

	ngOnInit(): void {
		const fadeInContainer = document.getElementById('fade-in-container');
		if (fadeInContainer) {
		  setTimeout(() => {
			fadeInContainer.classList.add('opacity-100');
		  }, 100);
		}
	  }
}
