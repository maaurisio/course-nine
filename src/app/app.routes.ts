import { Routes } from '@angular/router';
import { Product } from './components/product/product';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { Padre } from './components/padre/padre';
import { Pagina404 } from './components/pagina404/pagina404';
import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { PaginaNoEncontrada } from './components/pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
    //predeterminado
    {path: '', component: Product },

    {path: 'inicio', component: MiPerfil },
    {path: 'cuenta', component: Cuenta },
    {path: 'transacciones', component: Transacciones },
    {path: 'prestamos', component: Prestamos },
    {path: 'componentes', component: Product },
    {path: 'ciclo', component: Pelicula },
    {path: 'plantillas', component: Usuario },
    {path: 'directivas', component: Ventas },
    {path: 'modelos', component: Cine },
    {path: 'comunicacion', component: Padre },

    {path: '**', component: PaginaNoEncontrada }
];
