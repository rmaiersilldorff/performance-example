import {Component, OnInit} from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {Reise} from '../../models/common';
import {Observable} from 'rxjs';
import {first, startWith, switchMap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-suche-page',
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {

  reisen: Reise[];
  sucheControl = new FormControl();
  filteredReisen$: Observable<Reise[]>;

  constructor(private reiseService: ReiseService) {
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

  }
}
