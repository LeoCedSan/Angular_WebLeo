import { Routes } from '@angular/router';
import { ProductosComponent } from './components/Contenidos/productos/productos.component';
import { PadminComponent } from './components/Contenidos/padmin/padmin.component';
import { ContenidoComponent } from './components/Contenidos/contenido/contenido.component';

export const routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'padmin', component: PadminComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: '**', redirectTo: '/contenido' , pathMatch: 'full'}
];
