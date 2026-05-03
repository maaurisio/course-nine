import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  public name: string;
  public marca: string;
  public precio: number;
  public descripcion: string;

  constructor(){
    this.name = 'PC portatil 1';
    this.marca = 'Dell';
    this.precio = 1000;
    this.descripcion = 'Portátil con procesador i7 y 16GB de RAM';
    console.log('se ha cargado el componente product');
  }
}
