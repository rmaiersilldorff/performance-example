import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, inject } from '@angular/core';
import {Reise} from '../../models/common';
import {MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-reise-list-item',
  templateUrl: './reise-list-item.component.html',
  styleUrls: ['./reise-list-item.component.scss'],
  imports: [
    MatListItem,
    MatIcon
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);


  @Input() reise: Reise;
  @Output() addAction = new EventEmitter<void>();

  blink() {
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });
  }

}
