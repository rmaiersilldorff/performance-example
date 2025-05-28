import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div><span>Anzahl: {{counter}}</span></div>
    <button type="button" (click)="plus()">+</button>
    <button type="button" (click)="reset()">Reset</button>
  `
})
export class CounterComponent {

  constructor() {
  }

  @Input() counter = 0;
  @Output() counterReset: EventEmitter<void> = new EventEmitter<void>();

  plus() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
    this.counterReset.emit();
  }


}
