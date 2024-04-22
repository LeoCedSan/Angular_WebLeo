import { Routes } from '@angular/router';
import { PadminComponent } from './components/Contenidos/padmin/padmin.component';
import { ContenidoComponent } from './components/Contenidos/contenido/contenido.component';
import { SendProductsComponent } from './components/Contenidos/form-products/form-products.component';
import { GetProductsComponent } from './components/Contenidos/products/products.component';


export const routes: Routes = [
    { path: 'products', component: GetProductsComponent },
    { path: 'padmin', component: PadminComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'formproduct', component: SendProductsComponent},
    { path: '**', redirectTo: '/contenido' , pathMatch: 'full'}
];
