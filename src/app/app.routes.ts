import { Routes } from '@angular/router';
import { productroute } from './product-list/product.routes';

export const routes: Routes = [
    ...productroute,
    { path: '', redirectTo: '/Products', pathMatch: 'full' }
];
