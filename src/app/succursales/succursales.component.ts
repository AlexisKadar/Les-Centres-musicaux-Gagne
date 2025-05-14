import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-succursales',
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule, GoogleMapsModule, NgFor],
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

  constructor() { }

  ngOnInit() {
  }

}
