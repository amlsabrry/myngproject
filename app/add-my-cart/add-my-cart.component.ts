import { Component } from '@angular/core';
import { AddcartserviceService } from '../services/addcartservice.service';
import { products } from '../models/products';


@Component({
  selector: 'app-add-my-cart',
  templateUrl: './add-my-cart.component.html',
  styleUrls: ['./add-my-cart.component.css']
})

export class AddMyCartComponent {
  itemcart: products[] = [];
  constructor(private Service: AddcartserviceService) {
    this.itemcart = this.Service.GetCart()
    console.log("hello", this.itemcart = this.Service.GetCart())
  }

  DeleteProduct(i: products) {
    var DeletedProductIndex = this.itemcart.findIndex(product => product.id == i.id);
    this.itemcart.splice(DeletedProductIndex, 1);
  }
}
