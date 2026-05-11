import { Component, signal } from '@angular/core';
import { Prestamos } from './components/prestamos/prestamos';
import { Usuario } from './components/usuario/usuario';
import { config } from './models/config'
import { Cine } from './components/cine/cine';
import { Transacciones } from './components/transacciones/transacciones';
import { Cuenta } from './components/cuenta/cuenta';

@Component({
  selector: 'app-root',
  imports: [ Cuenta, Transacciones ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aprender-angular');

  titulo = config.title;
  descripcion = config.description;

}
