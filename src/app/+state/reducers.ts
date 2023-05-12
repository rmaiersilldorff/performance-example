import { createFeature, createReducer, on } from '@ngrx/store';
import { loadAngeboteSuccess } from './actions';
import {Reise} from '../models/common';

export const REISE_FEATURE_KEY = 'reise';

export interface ReiseSlice {
    [REISE_FEATURE_KEY]: ReiseState;
}

export interface ReiseState {
    angebote: Reise[];
}

export const initialState: ReiseState = {
    angebote: []
};

export const angeboteFeature = createFeature({
    name: REISE_FEATURE_KEY,
    reducer: createReducer(
        initialState,
        on(loadAngeboteSuccess, (state, action) => {
            return { ...state, angebote: action.angebote };
        }),
    )
});
