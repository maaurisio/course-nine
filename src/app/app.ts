import { Component, signal } from '@angular/core';
import { Prestamos } from './components/prestamos/prestamos';
import { Usuario } from './components/usuario/usuario';
import { config } from './models/config'
import { Cine } from './components/cine/cine';
import { Transacciones } from './components/transacciones/transacciones';
import { Cuenta } from './components/cuenta/cuenta';
import { Padre } from './components/padre/padre';

@Component({
  selector: 'app-root',
  imports: [ Padre],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aprender-angular');

  titulo = config.title;
  descripcion = config.description;

}
