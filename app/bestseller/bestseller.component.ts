import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductserService } from '../services/productser.service';
import { products } from '../models/products';
import { fakeproducts } from '../models/fakeproducts';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent {
  ngOnInit() {
    this.getproduct();
  }
  ProductList: fakeproducts[] = [];
  constructor(private serv: ProductserService) {
  }
  getproduct() {
    this.serv.getpro().subscribe(result => {
      this.ProductList = result;
      console.log(result);
    }
    )
  }


}
