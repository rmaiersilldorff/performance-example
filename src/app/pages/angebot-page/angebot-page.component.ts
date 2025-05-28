import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {first} from 'rxjs/operators';
import {Reise} from '../../models/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-angebot-page',
  templateUrl: './angebot-page.component.html',
  styleUrls: ['./angebot-page.component.scss']
})
export class AngebotPageComponent {
  private reiseService = inject(ReiseService);


  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;
  angebotListRef;
  angebote$ = new BehaviorSubject<Reise[]>([]);
  changeIndex = -1;

  constructor() {
    this.reiseService.getAngebote().pipe(first())
      .subscribe((angebote) => {
        this.angebote$.next(angebote);
      });
  }

  changeItem() {
    (this.changeIndex + 1) <= this.angebote$.value.length ? this.changeIndex++ : this.changeIndex = 0;
    this.reiseService.changeAngebot(this.changeIndex).pipe(first())
      .subscribe((angebote) => {
        this.angebote$.next(angebote);
      });
  }

  addItem() {
    this.reiseService.addAngebot().pipe(first())
      .subscribe((angebote) => {
        this.angebote$.next(angebote);
      });
  }

}
