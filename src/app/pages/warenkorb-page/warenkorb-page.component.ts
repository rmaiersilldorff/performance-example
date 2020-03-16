import {Component, OnInit} from '@angular/core';
import {Reise} from '../../models/common';
import {Observable} from 'rxjs';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-warenkorb-page',
  templateUrl: './warenkorb-page.component.html',
  styleUrls: ['./warenkorb-page.component.scss']
})
export class WarenkorbPageComponent implements OnInit {

  basket$: Observable<Reise[]>;

  constructor(private basketService: BasketService) {
    this.basket$ = this.basketService.selectAll();
  }

  ngOnInit() {
  }
}
