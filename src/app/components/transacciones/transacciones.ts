import { Component, EventEmitter, Output } from '@angular/core';
import { TransaccionesModel } from '../../models/transacciones';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacciones',
  imports: [FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transacciones: Array<TransaccionesModel>;
  
  public descripcionTransaccion : string = '';


  constructor() {
    this.transacciones = [
      new TransaccionesModel(1, new Date('2024-01-15'), 'Compra en supermercado', 150.75, 'Gasto'),
      new TransaccionesModel(2, new Date('2024-01-20'), 'Pago de servicios', 80.50, 'Gasto'),
      new TransaccionesModel(3, new Date('2024-01-25'), 'Ingreso por salario', 2500.00, 'Ingreso'),
      new TransaccionesModel(4, new Date('2024-01-30'), 'Compra en línea', 120.00, 'Gasto'),
      new TransaccionesModel(5, new Date('2024-02-05'), 'Ingreso por venta', 500.00, 'Ingreso')
    ]; { }
  }

  showTransaccion() {
    alert(this.descripcionTransaccion);
  }

  @Output() mensajeEnviado = new EventEmitter();

  enviarSaludo() {
    // El setTimeout envía la ejecución al final de la cola
    setTimeout(() => {
      this.mensajeEnviado.emit('hola, desde transacciones');
    }, 0);
  }
}