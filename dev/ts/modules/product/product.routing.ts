import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }                from '../../services/auth-guard.service';
import { ProductComponent }            from './product.component';
import { ListProductComponent }            from './components/listProduct.component';
import { AddProductComponent }            from './components/addProduct.component';

const productRoutes: Routes = [
    { 
        path: 'product',  
        component: ProductComponent, 
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', component: ListProductComponent},
                    { path: 'add', component: AddProductComponent}
                ]
            }
        ]
    },
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);