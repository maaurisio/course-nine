import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  imports: [NgClass, NgStyle],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public colorear: boolean = true;

  public mostrar: string = 'no';

  misEstilos = {
    'background-color': 'yellow',
    'padding': '10px',
    'font-weight': 'bold',
    'font-style': 'italic',
    'font-family': 'Courier'
  }
}
