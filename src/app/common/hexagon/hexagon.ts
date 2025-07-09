import { Component, inject, Input } from '@angular/core';
import { SharedData } from '../../services/shared-data';

@Component({
  selector: 'hexagon',
  imports: [],
  templateUrl: './hexagon.html',
  styleUrl: './hexagon.css'
})
export class Hexagon {

  themeLevel: SharedData = inject(SharedData);
  @Input() title: string = '';
}