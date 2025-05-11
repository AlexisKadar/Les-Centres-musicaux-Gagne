import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { LucideAngularModule, Music, Music2 } from "lucide-angular";
@Component({
	selector: "app-hero",
	standalone: true,
	imports: [NgOptimizedImage, LucideAngularModule],
	templateUrl: "./hero.component.html",
	styleUrl: "./hero.component.css",
})
export class HeroComponent {
	protected readonly Music = Music;
	protected readonly Music2 = Music2;
}
