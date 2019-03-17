import { environment } from '@client-env/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

// tslint:disable-next-line: no-empty-interface
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const initialState: AppState = {};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
