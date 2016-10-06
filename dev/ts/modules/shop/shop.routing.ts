import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }                from '../../services/auth-guard.service';
import { ShopComponent }            from './shop.component';
import { ListShopComponent }        from './components/listShop.component';
import { AddShopComponent }         from './components/addShop.component';

const shopRoutes: Routes = [
    { 
        path: 'shop',  
        component: ShopComponent, 
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', component: ListShopComponent },
                    { path: 'add', component: AddShopComponent }
                ]
            }
        ]
    },
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(shopRoutes);