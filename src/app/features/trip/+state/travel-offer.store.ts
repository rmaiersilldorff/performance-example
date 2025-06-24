import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import {inject} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {Router} from '@angular/router';
import {OfferService, PageDtoTravelOffersDetailsDto} from '@trip/api';
import {mapToTripList, Trip} from '@trip/models';

export interface TravelOfferState {
    travelOffer: Trip[];
    selectedTravelOffer: Trip | null;
    isLoading: boolean;
}

export const initialState: TravelOfferState = {
    travelOffer: [],
    selectedTravelOffer: null,
    isLoading: false,
};

export const TravelOfferStore = signalStore(
    withState(initialState),
    withMethods((store, offerService = inject(OfferService), router = inject(Router)) => ({
        loadTravelOffer: rxMethod<void>(
            pipe(
                tap(() => patchState(store, {isLoading: true})),
                switchMap(() => {
                    return offerService.listTravelOffers().pipe(
                        tapResponse({
                            next: (result: PageDtoTravelOffersDetailsDto) => patchState(store, {travelOffer: mapToTripList(result.elements)}),
                            error: (error) => console.log(error),
                            finalize: () => patchState(store, {isLoading: false}),
                        }),
                    );
                }),
            ),
        ),
        selectTravelOffer: rxMethod<Trip>(pipe(tap((travelOffer: Trip) => patchState(store, {selectedTravelOffer: travelOffer})))),
    })),
);
