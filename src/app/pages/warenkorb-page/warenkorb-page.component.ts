import {Component, Injector, OnInit, ɵLifecycleHooksFeature, ɵrenderComponent} from '@angular/core';
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

  constructor(private basketService: BasketService,
              private injector: Injector) {
    this.basket$ = this.basketService.selectAll();
  }

  ngOnInit() {
    // this.renderComponent();
  }

  renderComponent() {
    import('../../components/counter/counter.component').then((c) => {
      ɵrenderComponent(c.CounterComponent, {host: 'my-counter', injector: this.injector, hostFeatures: [ɵLifecycleHooksFeature]});
    });
  }
}
