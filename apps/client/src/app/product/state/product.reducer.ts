import { PRODUCT_FEATURE_KEY } from '../constants/product';
import { Product } from '../models/product';
import { ProductAction, ProductActionTypes } from './product.actions';

export interface ProductEntity {
  list: Product[]; // list of Products; analogous to a sql normalized table
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: any; // last none error (if any)
}

export interface ProductState {
  readonly [PRODUCT_FEATURE_KEY]: ProductEntity;
}

export const initialState: ProductEntity = {
  list: [{
    id: '1',
    name: 'Product 01'
  }],
  loaded: true
};

export function productReducer(state: ProductEntity = initialState, action: ProductAction): ProductEntity {
  switch (action.type) {
    case ProductActionTypes.ProductLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
