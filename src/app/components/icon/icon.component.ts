import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() width : number = 0;
  @Input() heigth = 0;
  @Input() name = "";
}
