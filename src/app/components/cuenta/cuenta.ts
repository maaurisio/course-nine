import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  ngOnInit() {
    console.log("el componente de cuenta esta INICIANDO")
  }

  ngOnDestroy() {
    console.log("el componente de cuenta esta DESTRUYENDO")
  }
}
