import {ChangeDetectorRef, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {first} from 'rxjs/operators';
import {Reise} from '../../models/common';
import {MatDialog} from '@angular/material/dialog';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-angebot-page',
  templateUrl: './angebot-page.component.html',
  styleUrls: ['./angebot-page.component.scss']
})
export class AngebotPageComponent {

  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;
  angebotListRef;
  angebote$ = new BehaviorSubject<Reise[]>([]);
  changeIndex = -1;

  constructor(private reiseService: ReiseService,
              private resolver: ComponentFactoryResolver,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef,
              private injector: Injector) {
    this.reiseService.getAngebote().pipe(first())
      .subscribe((angebote) => {
        this.angebote$.next(angebote);
      });
  }

  changeItem() {
    // this.angebote = this.angebote.map((item, index) => index === 0 ? ({...item, header: 'Changed Item'}) : item);
    // this.angebote[0].header = 'Changed';
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

  async openDialog() {
    const {QuestionDialogComponent} = await import('../../components/question-dialog/question-dialog.component');
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      autoFocus: false,
      width: '25rem',
    });

    dialogRef.componentInstance.title = 'Löschen';
    dialogRef.componentInstance.message = 'Wollen Sie die Daten wirklich löschen';
    dialogRef.componentInstance.close.pipe(first())
      .subscribe((value) => {
        console.log(value);
        this.dialog.closeAll();
      });
  }

  async loadComponent() {
    if (!this.angebotListRef) {
      const {CounterComponent} = await import(`../../components/counter/counter.component`);
      const factory = this.resolver.resolveComponentFactory(CounterComponent);
      this.angebotListRef = this.vcr.createComponent(factory, 0, this.injector, []);
      this.angebotListRef.instance.items$ = this.angebote$;
    }
  }

}
