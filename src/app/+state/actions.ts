import { createAction, props } from '@ngrx/store';
import {Reise} from '../models/common';

export const loadAngebote = createAction(
    '[Reise] loadAngebote',
    props<{page: number}>()
);

export const loadAngeboteSuccess = createAction(
    '[Reise] loadAngeboteSuccess',
    props<{angebote: Reise[]}>()
);
