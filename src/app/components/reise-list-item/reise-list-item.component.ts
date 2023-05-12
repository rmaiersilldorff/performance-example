import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-reise-list-item',
  templateUrl: './reise-list-item.component.html',
  styleUrls: ['./reise-list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent {

  @Input() reise: Reise;
  @Output() addAction = new EventEmitter<void>();

  constructor(private element: ElementRef,
              private zone: NgZone) {
  }

  blink() {
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });
  }

}
