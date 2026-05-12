import { Component } from '@angular/core';
import { Hijo } from '../../components/hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  nombrePadre: string = 'componente padre';
  saludoRecibido: string = '';

  recibirSaludoHijo(saludo: string) {
    this.saludoRecibido = saludo;
    console.log('Saludo recibido del hijo:', saludo);
  }
}
