import {Component, Input, OnInit} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-angebot-list',
  templateUrl: './angebot-list.component.html',
  styleUrls: ['./angebot-list.component.scss']
})
export class AngebotListComponent implements OnInit {

  @Input() items: Reise[];

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(index: number, item: Reise) {
    return item.id;
  }

}
