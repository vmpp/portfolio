import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Map } from './map/map';

@Component({
  imports: [RouterOutlet, Map],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Vítor');

  changeTitle(): void {
    this.title.set('Vítor');
  }

  onLocationSelected(location: string): void {
    this.title.set(location);
  }
}
