import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  imports: [],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
})
export class MiPerfil {
  constructor(){
    alert('¡Bienvenido al perfil, estás dentro de la aplicación!)');
    console.log('Se cargó el componente de perfil correctamente.');
  }
}
