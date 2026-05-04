import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { Cuenta } from '../cuenta/cuenta';

@Component({
  selector: 'app-product',
  imports: [Pelicula, Cuenta],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  public name: string;
  public marca: string;
  public precio: number;
  public descripcion: string;

  public mostrar_pelicula: boolean = true;
  public mostrar_cuenta: boolean = true;

  //El componente nace
  constructor() {
    this.name = 'PC portatil 1';
    this.marca = 'Dell';
    this.precio = 1000;
    this.descripcion = 'Portátil con procesador i7 y 16GB de RAM';
    console.log('se ha cargado el componente product');
  }
  //El componente arranca
  ngOnInit() {
    console.log('se ha inicializado el componente product');
  }

  ngAfterViewInit() {
    console.log('se ha renderizado el componente product');
  }

  ngDoCheck() {
    console.log('se ha cambiado el componente product');
  }

  cambiarNombre() {
    this.name = 'PC portatil 2';
  }

  ocultarPelicula(valor: boolean) {
    this.mostrar_pelicula = valor;
  }

  //cuenta
  ocultarCuenta(valor: boolean) {
    this.mostrar_cuenta = valor;
  }
}
