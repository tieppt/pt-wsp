import { AppState } from '@client/app/root/state';
import { ActionReducerMap } from '@ngrx/store';
import { PRODUCT_FEATURE_KEY, PRODUCT_MODULE_FEATURE_KEY } from '../constants/product';
import { initialState as productInitialState, productsReducer, ProductState } from './product.reducer';

export interface ProductModuleState extends AppState {
  readonly [PRODUCT_MODULE_FEATURE_KEY]: ProductState;
}


export const reducers: ActionReducerMap<ProductState> = {
  [PRODUCT_FEATURE_KEY]: productsReducer
};

export const initialState: ProductState = {
  [PRODUCT_FEATURE_KEY]: productInitialState
};
