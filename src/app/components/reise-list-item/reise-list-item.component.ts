import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-reise-list-item',
  templateUrl: './reise-list-item.component.html',
  styleUrls: ['./reise-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent implements OnInit {

  @Input() item: Reise;
  @Output() addAction = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
