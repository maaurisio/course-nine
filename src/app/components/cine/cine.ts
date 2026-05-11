import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = "Modelos";
    this.peliculas = [
      new Pelicula(1, "El Padrino", "Drama", "Francis Ford Coppola", 1972, "Netflix", true),
      new Pelicula(2, "El Señor de los Anillos: La Comunidad del Anillo", "Fantasía", "Peter Jackson", 2001, "HBO Max", true),
      new Pelicula(3, "Inception", "Ciencia ficción", "Christopher Nolan", 2010, "Amazon Prime Video", true),
      new Pelicula(4, "La La Land", "Musical", "Damien Chazelle", 2016, "Netflix", true),
      new Pelicula(5, "El Gran Hotel Budapest", "Comedia", "Wes Anderson", 2014, "HBO Max", true)
    ];
  }

  ngOnInit(){
    console.log(this.peliculas);
  }
  
}