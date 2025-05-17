import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-succursales',
  standalone: true,
  imports: [LucideAngularModule, GoogleMapsModule, NgFor, CommonModule],
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
  @ViewChild('slide', { static: false }) slideRef!: ElementRef<HTMLDivElement>;
  gap = 88; // px (gap-22)


  constructor() { }

  ngOnInit() {
  }
  photos = [
    { image: "/succursales/image succursale 1.png" },
    { image: "/succursales/image succursale 2.png" },
    { image: "/succursales/image succursale 3.png" },
    { image: "/succursales/image succursale 4.png" },
    { image: "/succursales/image succursale 5.png" },
    { image: "/succursales/image succursale 6.png" },
    { image: "/succursales/image succursale 7.png" },
    { image: "/succursales/image succursale 8.png" },
    { image: "/succursales/image succursale 9.png" },
    { image: "/succursales/image succursale 10.png" },
    { image: "/succursales/image succursale 11.png" }
  ]
  
	get maxIndex(): number {
		return this.photos.length - 1;
	}
  
  next() {
		this.currentIndex = this.currentIndex + 1 > this.maxIndex ? 0 : this.currentIndex + 1;
	}

	prev() {
		this.currentIndex = this.currentIndex - 1 < 0 ? this.maxIndex : this.currentIndex - 1;
	}
  
  translateX() {
    const slideWidth = this.slideRef?.nativeElement.offsetWidth || 0;
    return this.currentIndex * (slideWidth + this.gap);
  }
}
