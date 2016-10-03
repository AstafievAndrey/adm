import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ShopComponent } from './shop/shop.component';

import { AuthGuard }                from './services/auth-guard.service';

import { loginRoutes,
         authProviders }  from './login/login.routing';

const appRoutes: Routes = [
    ...loginRoutes,
    {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', redirectTo: '/shop',pathMatch: 'full' },
                    { path: 'shop' }
                ]
            }
        ]
    }
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



