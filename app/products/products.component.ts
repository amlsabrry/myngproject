import { Component } from '@angular/core';
//import interface 
import { products } from '../models/products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddcartserviceService } from '../services/addcartservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  SearchName: string = "";

  //products:productsType[]
  products: products[] = [] = [
    { id: 1, name: "Facial Toner", imgSrc: "../assets/images/image1.jpg", description: "Antipodes Ananda Antioxidant-Rich alco-free Gentle Toner 100ml", price: "34€", quantity: 12 },
    { id: 2, name: "Facial Serum", imgSrc: "../assets/images/image2.png", description: "Antipodes Apostle Skin-Brightening and Tone-Correcting Serum 30ml", price: "27€", quantity: 6 },
    { id: 3, name: "Hair Conditioner", imgSrc: "../assets/images/image3.jpg", description: "Avalon Nourishing Lavender Hair Conditioner", price: "16€", quantity: 2 },
    { id: 4, name: "Hair Shampoo", imgSrc: "../assets/images/image4.jpg", description: "Giovanni Root 66 Max Volume Shampoo", price: "25€", quantity: 0 },
    { id: 5, name: "Body Shower Gel", imgSrc: "../assets/images/image5.jpg", description: "Avalon Organics, Nourishing Lavender Bath & Body Shower Gel", price: "62€", quantity: 4 },
    { id: 6, name: "Hair Conditioner", imgSrc: "../assets/images/image6.jpg", description: "Giovanni LEAVE-IN mostuire Hair Weightless", price: "32€", quantity: 5 },
    { id: 1, name: "Facial Moisturiser", imgSrc: "../assets/images/image11.jpg", description: "Sukin Facial Moisturiser is a light-weight, Avocado, Sesame Seed", price: "53€", quantity: 22 },
    { id: 2, name: "Facial Moisturiser", imgSrc: "../assets/images/image10.jpg", description: "Super Greens Nutrient Rich enriched with extracts of Kale", price: "19€", quantity: 1 },
    { id: 3, name: "Facial Lotion", imgSrc: "../assets/images/image12.jpg", description: "light moisturising cream for normal and combination skin that feeds the skin ", price: "24€", quantity: 6 },
    { id: 4, name: "Rosehip Oil", imgSrc: "../assets/images/image13.jpg", description: "Sukin's Certified Organic Rosehip Oil contains no less than 70% essential fatty", price: "42€", quantity: 0 },
    { id: 5, name: " Facial Toner", imgSrc: "../assets/images/image15.jpg", description: "Enlivens and fortifies. For normal, dry and sensitive skin", price: "28€", quantity: 0 },
    { id: 6, name: "Hair Volumising", imgSrc: "../assets/images/image14.jpg", description: "fine and limp hair with this Volumising Thickening Spritz from Sukin.", price: "39€", quantity: 9 },]

  FilterdProducts: products[] = this.products;

  Search(Name: string) {
    this.FilterdProducts = this.products.filter((product) => {
      return product.name.toLocaleLowerCase().includes(Name.toLocaleLowerCase()) ||
        product.price.toLocaleLowerCase().includes(Name.toLocaleLowerCase())
    })
  }

  Reset() {
    this.FilterdProducts = this.products;
  }
  mycart: products[] = [];
  array: products[] = [];
  AddMyCart(item: products) {
    this.array.push(item);
    this.service.SetCart(this.array);
  }
  DeleteProduct(item: products) {
    var DeletedProductIndex = this.mycart.findIndex(product => product.id == item.id);
    this.mycart.splice(DeletedProductIndex, 1);
  }



  AddProductForm: FormGroup;
  constructor(private builder: FormBuilder, private service: AddcartserviceService) {
    this.AddProductForm = this.builder.group({
      name: [''],
      imgSrc:[''],
      description: [''],
      price: [''],
      quantity: ['']
    })
  }

  submit() {
    console.log(this.AddProductForm.value);
    this.FilterdProducts.push(this.AddProductForm.value);
  }
}

// imgSrc: "../assets/images/image9.jpg"