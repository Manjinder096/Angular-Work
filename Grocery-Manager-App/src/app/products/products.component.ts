import { Component, OnInit } from '@angular/core';

// import { Product } from './product.model';
// import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: []
})
export class ProductsComponent implements OnInit {
  // selectedProduct: Product;

  constructor() {}
  // constructor(private productService: ProductService) {}
  ngOnInit() {
    
  }

}
