import {Component, effect, inject, signal} from '@angular/core';
import {Reise} from '../../models/common';
import {ReiseService} from '../../services/reise.service';
import {combineLatest, interval, lastValueFrom} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {AngebotStore} from '../../+state/angebot.store';
import {MatFormField, MatHint, MatInput, MatSuffix} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {ReiseListItemComponent} from '../../components/reise-list-item/reise-list-item.component';
import {MatList, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {MatLabel} from '@angular/material/form-field';
import {MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-suche-page',
    templateUrl: './suche-page.component.html',
    imports: [
        MatFormField,
        FormsModule,
        MatIcon,
        MatHint,
        ReiseListItemComponent,
        MatList,
        MatLabel,
        NgScrollbar,
        MatInput,
        MatIconButton,
        MatSuffix,
        MatListSubheaderCssMatStyler
    ],
    providers: [AngebotStore],
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
