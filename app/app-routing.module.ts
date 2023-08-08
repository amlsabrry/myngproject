import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { AddMyCartComponent } from './add-my-cart/add-my-cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: "contactus", component: ContactusComponent },
{ path: "aboutus", component: AboutusComponent },
{ path: "bestseller", component: BestsellerComponent },
{ path: "AddMyCart", component: AddMyCartComponent },
{ path: "home", component: HomeComponent },
{ path: "**", component: ProductsComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
