import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    ProductDetailsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  public products: Array<ProductRepresentation> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit(10)
      .subscribe({
        next:(data) => {
          console.log(data);
          this.products = data;
        },
        error(err) {
          console.log(err);
        }
      });
  }
}
