import {Component, EventEmitter, Input, Output, ɵdetectChanges} from '@angular/core';

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
    ɵdetectChanges(this);
  }

  reset() {
    this.counter = 0;
    this.counterReset.emit();
    ɵdetectChanges(this);
  }


}
