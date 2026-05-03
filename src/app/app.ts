import { Component, signal } from '@angular/core';
import { Product } from './components/product/product';
import { MiPerfil } from './components/mi-perfil/mi-perfil';

@Component({
  selector: 'app-root',
  imports: [ Product, MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aprender-angular');
}
