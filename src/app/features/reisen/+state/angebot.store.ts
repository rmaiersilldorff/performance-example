import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import {inject} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {Router} from '@angular/router';
import {AngebotService, PageDtoAngebotDetailsDto} from '@reisen/api';
import {mapToReiseList, Reise} from '@reisen/models';

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
    withMethods((store, angebotService = inject(AngebotService), router = inject(Router)) => ({
        loadAngebote: rxMethod<void>(
            pipe(
                tap(() => patchState(store, {isLoading: true})),
                switchMap(() => {
                    return angebotService.listAngebote().pipe(
                        tapResponse({
                            next: (result: PageDtoAngebotDetailsDto) => patchState(store, {angebote: mapToReiseList(result.elements)}),
                            error: (error) => console.log(error),
                            finalize: () => patchState(store, {isLoading: false}),
                        }),
                    );
                }),
            ),
        ),
        selectAngebot: rxMethod<Reise>(pipe(tap((angebot: Reise) => patchState(store, {selectedAngebot: angebot})))),
    })),
);
