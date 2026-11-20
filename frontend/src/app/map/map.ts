import { Component, input } from '@angular/core';
import { MapLocation } from './map-location';

@Component({
  imports: [],
  selector: 'app-map',
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class Map {
  readonly locations = input.required<MapLocation[]>();
  readonly visitedLocations = input.required<Set<string>>();
}
