import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }                from '../services/auth-guard.service';
import { ShopComponent }            from './shop.component';
import { ListShopComponent }        from './listShop.component';
import { AddShopComponent }         from './addShop.component';

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
                    { path: '', component: ListShopComponent }
                ]
            }
        ]
    },
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(shopRoutes);