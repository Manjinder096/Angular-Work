import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private productService: ProductService) {}

  storeProducts() {
    const products = this.productService.getProducts();
    this.http
      .put(
        'https://angular-assignment-1269d.firebaseio.com/recipes.json',
        products
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchProducts() {
    console.log('max DS')
    return this.http
      .get<Product[]>(
        'https://angular-assignment-1269d.firebaseio.com/recipes.json'
      )
      .pipe(
        tap(products => {
          this.productService.setProducts(products);
        })
      )
  }
}
