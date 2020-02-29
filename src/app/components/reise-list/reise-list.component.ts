import {Component, Input, OnInit} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-reise-list',
  templateUrl: './reise-list.component.html',
  styleUrls: ['./reise-list.component.scss']
})
export class ReiseListComponent implements OnInit {

  @Input() items: Reise[];

  constructor() {
  }

  ngOnInit() {
  }

}
