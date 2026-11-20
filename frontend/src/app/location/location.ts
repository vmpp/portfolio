import { Component, input, output, ElementRef, inject, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-location',
  styleUrl: './location.css',
  templateUrl: './location.html',
})
export class Location implements OnDestroy, AfterViewInit {
  readonly name = input.required<string>();
  readonly explored = output<string>();
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private intersectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  markAsExplored(): void {
    this.explored.emit(this.name());
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      threshold: 0.25,
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= options.threshold) {
          this.markAsExplored();
          observer.disconnect();
        }
      });
    };

    this.intersectionObserver = new IntersectionObserver(callback, options);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

}
