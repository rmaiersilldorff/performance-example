import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {first} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {ReiseService} from '@reisen/services';
import {AngebotListComponent} from '@angebote/components';
import {Reise} from '@reisen/models';

@Component({
  selector: 'app-angebot-page',
  templateUrl: './angebot-page.component.html',
  imports: [
    AngebotListComponent
  ],
  styleUrls: ['./angebot-page.component.scss']
})
export class AngebotPageComponent {
  private reiseService = inject(ReiseService);


  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef | undefined;
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
