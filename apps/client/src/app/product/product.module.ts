import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PRODUCT_MODULE_FEATURE_KEY } from './constants/product';
import { initialState, reducers } from './state';
import { ProductEffects } from './state/product.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(PRODUCT_MODULE_FEATURE_KEY, reducers, { initialState }),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {}
