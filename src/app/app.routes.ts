import { Routes } from "@angular/router";
import { AchatComponent } from "./achat/achat.component";
import { LayoutComponent } from "./components/global/layout/layout.component";
import { CoursComponent } from "./cours/cours.component";
import { LandingComponent } from "./landing/landing.component";
import { LocationComponent } from "./location/location.component";
import { TemoignagesComponent } from "./temoignages/temoignages.component";
import { ReparationComponent } from "./reparation/reparation.component";


export const routes: Routes = [
	{ path: "", component: LandingComponent },
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "location", component: LocationComponent },
			{ path: "achat", component: AchatComponent },
			{ path: "reparation", component: ReparationComponent },
			{ path: "cours", component: CoursComponent },
			{ path: "temoignages", component: TemoignagesComponent },
		],
	},
];
