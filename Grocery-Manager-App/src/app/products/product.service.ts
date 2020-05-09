import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [
    // new Product('Bread', 
    //           'whole wheat bran bread', 
    //           'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG',
    //           10),
    // new Product('Milk', 
    //           'Cow\'s milk', 
    //           'https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASAMUL-TAAZA-FBIGB9858327D7DB39D/1562078956647_0.jpg',
    //           8)
    ];

  constructor() {}

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
    console.log('here in add product')
  }

  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }

}
