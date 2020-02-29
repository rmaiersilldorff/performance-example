import {Component, Input, OnInit} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-reise-card',
  templateUrl: './reise-card.component.html',
  styleUrls: ['./reise-card.component.scss']
})
export class ReiseCardComponent implements OnInit {

  @Input() item: Reise;

  constructor() {
  }

  ngOnInit(): void {
  }

}
