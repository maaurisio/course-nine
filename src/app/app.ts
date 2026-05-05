import { Component, signal } from '@angular/core';
import { Prestamos } from './components/prestamos/prestamos';
import { Usuario } from './components/usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [ Usuario ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aprender-angular');
}
