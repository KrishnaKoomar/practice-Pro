import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const productroute: Routes = [
    {path:'Products', component:ProductListComponent},
    {path:'Product/:id', component:ProductDetailComponent},
    
];   