import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {loadAngebote, loadAngeboteSuccess} from './actions';
import {Reise} from '../models/common';
import {ReiseService} from '../services/reise.service';

/*const loadAngebote$ = createEffect((actions$ = inject(Actions),
                                    reiseService = inject(ReiseService)) => actions$.pipe(
    ofType(loadAngebote),
    switchMap(() => reiseService.getAngebote()),
    map((angebote: Reise[]) => loadAngeboteSuccess({angebote}))
));*/

@Injectable({
    providedIn: 'root'
})
export class AngeboteEffects {
    loadAngebote$;

    constructor(
        private actions$: Actions,
        private reiseService: ReiseService) {
        this.loadAngebote$ = createEffect(() => this.actions$.pipe(
            ofType(loadAngebote),
            switchMap(() => this.reiseService.getAngebote()),
            map((angebote: Reise[]) => loadAngeboteSuccess({angebote}))
        ));
    }
}
