import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  public cliente: Cliente;

  constructor() {
    this.cliente = new Cliente(1, "Juan", "Perez", "juan.perez@example.com", 1000);
  }

  ngOnInit() {
    console.log("el componente de cuenta esta INICIANDO")
  }

  ngOnDestroy() {
    console.log("el componente de cuenta esta DESTRUYENDO")
  }
}
