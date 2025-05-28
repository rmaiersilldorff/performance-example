import {Component, Input} from '@angular/core';
import {Reise} from '../../models/common';
import {BehaviorSubject} from 'rxjs';
import {NgScrollbar} from 'ngx-scrollbar';
import {ReiseCardComponent} from '../reise-card/reise-card.component';

@Component({
  selector: 'app-angebot-list',
  templateUrl: './angebot-list.component.html',
  imports: [
    NgScrollbar,
    ReiseCardComponent
  ],
  styleUrls: ['./angebot-list.component.scss']
})
export class AngebotListComponent {

  @Input() angebote$: BehaviorSubject<Reise[]> = new BehaviorSubject<Reise[]>([]);

  trackByFn(index: number, item: Reise) {
    return item.id;
  }

}
