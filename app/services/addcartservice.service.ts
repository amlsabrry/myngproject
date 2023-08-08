import { Injectable } from '@angular/core';
import { products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class AddcartserviceService {

  private mycart:products[]=[];
  constructor() { }

  SetCart(product: products[]) {
    this.mycart = product;
  }

  GetCart() {
    return this.mycart;
  }
}
