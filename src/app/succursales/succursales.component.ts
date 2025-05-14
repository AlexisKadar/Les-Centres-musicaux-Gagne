import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-succursales',
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule],
  templateUrl: './succursales.component.html',
  styleUrls: ['./succursales.component.css']
})
export class SuccursalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
