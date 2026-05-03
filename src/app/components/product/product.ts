import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(){
    console.log('se ha cargado el componente product');
    alert('hola');
  }
}
