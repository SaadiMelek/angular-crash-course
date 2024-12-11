import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/models/product-representation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  param: any;
  queryParam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    /*console.log(this.activatedRoute);
    console.log(this.activatedRoute.snapshot.params);
    this.param = this.activatedRoute.snapshot.params['username'];

    this.queryParam = this.activatedRoute.snapshot.queryParams['lastname'];

    this.service.getAllProductsWithLimit()
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(err) {
          console.log(err);
        }
      });*/

    const  product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    };

    this.service.createProduct(product)
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(err) {
          if (err instanceof ErrorEvent) {
            console.log(err.message);
          } else {
            console.log(err);
          }
        }
      });

  }

}
