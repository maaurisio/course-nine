import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = 'https://youtube.com';
  redirigir = false;

  prestamosList = [
    {id: 1, monto: 1000, estado: 'aprobado'},
    {id: 2, monto: 2000, estado: 'pendiente'},
    {id: 3, monto: 1500, estado: 'aprobado'},
    {id: 4, monto: 3000, estado: 'aprobado'},
    {id: 5, monto: 2500, estado: 'pendiente'},
  ]

  prestamo = {
    id: 1,
    tipo : 'hipotecario',
    interes: 5.5,
  };

  cambioRedireccion() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
