import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ]
})
export class MainModule { }
