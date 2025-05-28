import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import {inject} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {Router} from '@angular/router';
import {ReiseService} from '../services/reise.service';
import {Reise} from '../models/common';

export interface AngebotState {
    angebote: Reise[];
    selectedAngebot: Reise | null;
    isLoading: boolean;
}

export const initialState: AngebotState = {
    angebote: [],
    selectedAngebot: null,
    isLoading: false,
};

export const AngebotStore = signalStore(
    withState(initialState),
    withMethods((store, reiseService = inject(ReiseService), router = inject(Router)) => ({
        loadAngebote: rxMethod<void>(
            pipe(
                tap(() => patchState(store, {isLoading: true})),
                switchMap(() => {
                    return reiseService.getAngebote().pipe(
                        tapResponse({
                            next: (angebote: Reise[]) => patchState(store, {angebote}),
                            error: (error) => console.log(error),
                            finalize: () => patchState(store, {isLoading: false}),
                        }),
                    );
                }),
            ),
        ),
        selectAngebot: rxMethod<Reise>(pipe(tap((reise) => patchState(store, {selectedAngebot: reise})))),
    })),
);
