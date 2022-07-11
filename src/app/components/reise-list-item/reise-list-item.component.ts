import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Reise} from '../../models/common';
import {MaterialModule} from '../../material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'reise-list-item',
  templateUrl: './reise-list-item.component.html',
  styleUrls: ['./reise-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent {

  @Input() reise: Reise;
  @Output() addAction = new EventEmitter<void>();

}
