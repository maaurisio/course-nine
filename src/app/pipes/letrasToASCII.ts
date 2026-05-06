import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'letrasToAscii'
})

export class LetrasToASCII implements PipeTransform {
    transform(value: string) {
        let resultado = '';
        for (let i = 0; i < value.length; i++) {
            resultado += value.charCodeAt(i) + ' ';
        }
        return resultado.trim();
    } 
}