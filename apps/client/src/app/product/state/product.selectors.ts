import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { PRODUCT_FEATURE_KEY, PRODUCT_MODULE_FEATURE_KEY } from '../constants/product';
import { ProductEntity, ProductState } from './product.reducer';


// Lookup the 'ProductModule' feature state managed by NgRx
const getProductModuleState = createFeatureSelector<ProductState>(PRODUCT_MODULE_FEATURE_KEY);
const getProductState = createSelector(
  getProductModuleState,
  state => state[PRODUCT_FEATURE_KEY]
);

const getLoaded = createSelector(
  getProductState,
  (state: ProductEntity) => state.loaded
);
const getError = createSelector(
  getProductState,
  (state: ProductEntity) => state.error
);

const getAllProducts = createSelector(
  getProductState,
  getLoaded,
  (state: ProductEntity, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProductState,
  (state: ProductEntity) => state.selectedId
);
const getSelectedProduct = createSelector(
  getAllProducts,
  getSelectedId,
  (products, id) => {
    const result = products.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const productQuery = {
  getLoaded,
  getError,
  getAllProducts,
  getSelectedProducts: getSelectedProduct
};
