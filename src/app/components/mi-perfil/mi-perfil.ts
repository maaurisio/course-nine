import { Component } from '@angular/core';
import { Prestamos } from '../prestamos/prestamos';
import { Transacciones } from '../transacciones/transacciones';
import { Cuenta } from '../cuenta/cuenta';

@Component({
  selector: 'app-mi-perfil',
  imports: [Cuenta, Transacciones, Prestamos],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
})
export class MiPerfil {

  public name: string;
  public edad: string;
  public ocupacion: string;
  public direccion: string;
  public telefono: number;

  constructor(){
    this.name = 'Juan Pérez';
    this.edad = '30 años';
    this.ocupacion = 'Desarrollador de Software';
    this.direccion = 'Calle Falsa 123, Ciudad, País';
    this.telefono = 1234567890;
    console.log('Se cargó el componente de perfil correctamente.');
  }

  ngOnInit() {
    console.log('Se ha inicializado el componente de perfil.');
  }

  ngDoCheck() {
    console.log('Se ha detectado un cambio en el componente de perfil.');
  }

  cambiarEdad(){
    this.edad = '31 años';
  }

  cambiarDireccion(){
    this.direccion = 'Otra Dirección 456, Ciudad, País';
  }
}
