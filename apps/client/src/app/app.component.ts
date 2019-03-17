import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductModuleState } from './product/state';
import { productQuery } from './product/state/product.selectors';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private store$: Store<ProductModuleState>) {}
  ngOnInit() {
    this.store$.pipe(select(productQuery.getAllProducts)).subscribe(n => console.log(n));
  }
}
