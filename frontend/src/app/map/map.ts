import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-map',
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class Map {
  readonly locationName = input<string>();
  readonly locationSelected = output<string>();
}
