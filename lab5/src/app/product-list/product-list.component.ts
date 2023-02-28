import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { Category, categories } from '../categories';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category : Category | undefined;
  product : Product | undefined;
  products = products;

  like(product: Product): void {
    product.likeCount++;
  }
  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.reloadCategory();
  }

  reloadCategory() {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const productCategoryFromRoute = String(routeParams.get('categories'));
    // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.category === productCategoryFromRoute);
  }
 
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  deleteProduct(product: Product): void {
    const index = products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/