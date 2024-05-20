import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ counter }}</h3>

    <button (click)="increment()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement()">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
