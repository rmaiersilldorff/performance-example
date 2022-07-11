import {Component, Input} from '@angular/core';
import {Reise} from '../../models/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-angebot-list',
  templateUrl: './angebot-list.component.html',
  styleUrls: ['./angebot-list.component.scss']
})
export class AngebotListComponent {

  @Input() angebote$: BehaviorSubject<Reise[]> = new BehaviorSubject<Reise[]>([]);

  trackByFn(index: number, item: Reise) {
    return item.id;
  }

}
