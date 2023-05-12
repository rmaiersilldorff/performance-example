import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReiseState, REISE_FEATURE_KEY } from './reducers';

export const selectReise = createFeatureSelector<ReiseState>(REISE_FEATURE_KEY);

export const selectAngebote = createSelector(
    selectReise,
    booking => booking.angebote
);
