import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../../../Models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() product : ProductsComponent = undefined;

  products: Product;

  ngOnInit(){
    this.products = this.product.selectedProduct;
  }


}
