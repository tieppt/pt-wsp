import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { LoadProduct, ProductActionTypes, ProductLoaded, ProductLoadError } from './product.actions';
import { ProductState } from './product.reducer';


@Injectable()
export class ProductEffects {
  @Effect() loadProduct$ = this.dataPersistence.fetch(ProductActionTypes.LoadProduct, {
    run: (action: LoadProduct, state: ProductState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new ProductLoaded([]);
    },

    onError: (action: LoadProduct, error) => {
      console.error('Error', error);
      return new ProductLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ProductState>) {}
}
