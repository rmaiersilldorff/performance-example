import {Component, Injector, OnInit, ɵrenderComponent} from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {Reise} from '../../models/common';
import {Observable} from 'rxjs';
import {first, startWith, switchMap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-suche-page',
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {

  reisen: Reise[];
  sucheControl = new FormControl();
  filteredReisen$: Observable<Reise[]>;

  constructor(private reiseService: ReiseService,
              private basketService: BasketService,
              private injector: Injector) {
    reiseService.getAll()
      .pipe(first())
      .subscribe((reisen) => {
        this.reisen = reisen;
      });
  }

  ngOnInit() {
    this.filteredReisen$ = this.sucheControl.valueChanges.pipe(
      switchMap(text => this.reiseService.search(text)),
      startWith(this.reisen)
    );
    this.renderComponent();
  }

  addToCart(item: Reise) {
    this.basketService.add(item);
  }


  renderComponent() {
    import('../../components/counter/counter.component').then((c) => {
      ɵrenderComponent(c.CounterComponent, {host: 'my-counter', injector: this.injector});
    });
  }
}
