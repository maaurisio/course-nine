import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'app-usuario',
  imports: [Ventas],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = 'https://amazon.com';
  redirigir = false;

  marcasAutos = [
    { id: 1, nombre: 'Toyota' },
    { id: 2, nombre: 'Honda' },
    { id: 3, nombre: 'Ford' },
    { id: 4, nombre: 'Chevrolet' },
    { id: 5, nombre: 'BMW' },
  ];

  usuario = {
    id: 1,
    nombre: 'Juan',
    nick: 'juan123',
    rol: 'admin',
  }

  /*
  ngOnInit() {
    this.marcasAutos = [];
  }
  */

  cambioRedireccion() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}