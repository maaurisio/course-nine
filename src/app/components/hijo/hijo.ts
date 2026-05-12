import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreHijo: string = 'componente hijo';
  @Input() elNombrePadre: string = "";

  @Output() saludoHijo = new EventEmitter();

  enviarSaludo() {
    // El setTimeout envía la ejecución al final de la cola
    setTimeout(() => {
      this.saludoHijo.emit('hola papá, soy tu hijo');
    }, 0);
  }
}
