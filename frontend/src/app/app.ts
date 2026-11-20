import { Component, signal, computed } from '@angular/core';
import { Map } from './map/map';
import { Location } from './location/location';
import { MapLocation } from './map/map-location';

@Component({
  imports: [Location, Map],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly locations = signal<MapLocation[]>([
    { name: 'Home', x: 17, y: 18 },
    { name: 'University', x: 27, y: 50 },
    { name: 'Polarising', x: 44, y: 40 },
    { name: 'Belron', x: 56, y: 28 }
  ]);
  readonly visitedLocations = signal<Set<string>>(new Set());
  readonly totalLocations = computed(() => this.locations().length);

  onLocationExplored(location: string): void {
    if (this.locations().some(l => l.name === location)) {
      this.visitedLocations.update(current => {
        const updated = new Set(current);
        updated.add(location);
        return updated;
      });
    }
  }
}
