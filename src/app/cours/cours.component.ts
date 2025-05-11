import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-cours",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./cours.component.html",
	styleUrl: "./cours.component.css",
})
export class CoursComponent {
	courses = [
		{
			imageUrl:
				"https://www.parents.com/thmb/ZRneQeGqThv4iV61Nl25zgQMlhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-96162171-2000-061841fa01cf428bb25fdf405e251907.jpg",
			title: "Piano",
			price: "20$",
		},
		{
			imageUrl: "https://riversideguitarschool.com/wp-content/uploads/2022/08/group-classes-1.jpg",
			title: "Guitare",
			price: "30$",
		},
		{
			imageUrl: "https://thehappyviolinist.com/wp-content/uploads/2017/06/violin3-1080x675.jpg",
			title: "Violon",
			price: "40$",
		},
	];
}
