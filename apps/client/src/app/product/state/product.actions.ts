import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export enum ProductActionTypes {
  LoadProduct = '[Product] Load Product',
  ProductLoaded = '[Product] Product Loaded',
  ProductLoadError = '[Product] Product Load Error'
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;
}

export class ProductLoadError implements Action {
  readonly type = ProductActionTypes.ProductLoadError;
  constructor(public payload: any) {}
}

export class ProductLoaded implements Action {
  readonly type = ProductActionTypes.ProductLoaded;
  constructor(public payload: Product[]) {}
}

export type ProductAction = LoadProduct | ProductLoaded | ProductLoadError;

export const fromProductActions = {
  LoadProduct,
  ProductLoaded,
  ProductLoadError
};
