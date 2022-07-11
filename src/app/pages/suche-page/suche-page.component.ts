import {Component, OnInit} from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {Reise} from '../../models/common';
import {Observable} from 'rxjs';
import {first, startWith, switchMap} from 'rxjs/operators';
import {FormsModule, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
import {BasketService} from '../../services/basket.service';
import {ReiseListItemComponent} from '../../components/reise-list-item/reise-list-item.component';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ReiseListItemComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {

  reisen: Reise[];
  sucheControl = new UntypedFormControl();
  filteredReisen$: Observable<Reise[]>;

  constructor(private reiseService: ReiseService,
              private basketService: BasketService) {
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
  }

  addToCart(item: Reise) {
    this.basketService.add(item);
  }
}
