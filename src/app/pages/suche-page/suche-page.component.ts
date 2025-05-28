import {Component, effect, inject, signal} from '@angular/core';
import {Reise} from '../../models/common';
import {ReiseService} from '../../services/reise.service';
import {combineLatest, interval, lastValueFrom} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {AngebotStore} from '../../+state/angebot.store';
import {MatFormField} from '@angular/material/input';

@Component({
    selector: 'app-suche-page',
    templateUrl: './suche-page.component.html',
    imports: [
        MatFormField
    ],
    styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent {

    reisen: Reise[];
    filteredReisen = signal([]);
    destination = signal('');
    nights = signal(1);

    readonly store = inject(AngebotStore);

    reiseService = inject(ReiseService);

    destination$ = toObservable(this.destination);
    nights$ = toObservable(this.nights);

    criteria$ = combineLatest([this.destination$, this.nights$, interval(1000)]);

    // use rxjsinterop-api; create signal with initial value
    criteria = toSignal(this.criteria$, {initialValue: ['test', 1, -1]});

    // use rxjsinterop-api
    critera2$ = toObservable(this.criteria);

    // select Signal from store
    angebote = this.store.loadAngebote();


    constructor() {
        effect(() => {
            // trigger search
            void this.search();
        });

        // automatic unsubscribe for signals
        /*effect(() => {
            console.log('Count ', this.criteria()[2]);
        });*/

        // automatic unsubscribe for observable
        // this.critera2$.subscribe((value) => console.log('Count', value[2]));
    }


    addToCart(item: Reise) {
        throw new Error('not implemented yet');
    }

    async search(): Promise<void> {
        const value = await lastValueFrom(this.reiseService.search(this.destination(), this.nights()));
        this.filteredReisen.set(value);
    }
}
