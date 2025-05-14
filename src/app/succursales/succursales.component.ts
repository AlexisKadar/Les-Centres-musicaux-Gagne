import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-succursales',
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule, GoogleMapsModule, NgFor, CommonModule],
  templateUrl: './succursales.component.html',
  styleUrls: ['./succursales.component.css']
})
export class SuccursalesComponent implements OnInit {

  center : google.maps.LatLngLiteral = { lat: 45.49856712401489, lng: -73.51228043427608 };
  zoom : number = 12;
// 45.49856712401489, -73.51228043427608
  markerPositions : google.maps.LatLngLiteral[] = [
    { lat: 45.5111747, lng: -73.5623694},
    { lat: 45.4852152, lng: -73.4677635 }
  ];

  protected readonly ArrowLeft = ArrowLeft;
	protected readonly ArrowRight = ArrowRight;

  showMaps: boolean = true;
	currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }
  // photos = [
  //   {image: ""}
  // ]
  
	get maxIndex(): number {
		return 3;
	}
  
  next() {
		this.currentIndex = this.currentIndex + 1 > this.maxIndex ? 0 : this.currentIndex + 1;
	}

	prev() {
		this.currentIndex = this.currentIndex - 1 < 0 ? this.maxIndex : this.currentIndex - 1;
	}
}
