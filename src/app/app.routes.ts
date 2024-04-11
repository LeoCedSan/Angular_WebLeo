import { Routes } from '@angular/router';
import { ProductosComponent } from './components/Contenidos/productos/productos.component';
import { PadminComponent } from './components/Contenidos/padmin/padmin.component';
import { ContenidoComponent } from './components/Contenidos/contenido/contenido.component';
import { ProductFormComponent } from './components/Contenidos/product-form/product-form.component';

export const routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'padmin', component: PadminComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'product-form', component: ProductFormComponent},
    { path: '**', redirectTo: '/contenido' , pathMatch: 'full'}
];
