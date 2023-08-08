import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserService {

  constructor(private http: HttpClient) { }
  getpro() {
    let data = this.http.get<any>("http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx");
    return data;
  }
}
