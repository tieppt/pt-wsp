import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FEATURE_KEY } from '../constants/product';
import { ProductEntity } from './product.reducer';


// Lookup the 'Products' feature state managed by NgRx
const getProductsState = createFeatureSelector<ProductEntity>(PRODUCT_FEATURE_KEY);

const getLoaded = createSelector(
  getProductsState,
  (state: ProductEntity) => state.loaded
);
const getError = createSelector(
  getProductsState,
  (state: ProductEntity) => state.error
);

const getAllProducts = createSelector(
  getProductsState,
  getLoaded,
  (state: ProductEntity, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProductsState,
  (state: ProductEntity) => state.selectedId
);
const getSelectedProducts = createSelector(
  getAllProducts,
  getSelectedId,
  (products, id) => {
    const result = products.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const productsQuery = {
  getLoaded,
  getError,
  getAllProducts,
  getSelectedProducts
};
