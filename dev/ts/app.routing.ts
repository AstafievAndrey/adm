import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent }   from './components/admin-dashboard.component';
import { ShopComponent }       from './components/shop/shop.component';
import { HookahComponent }       from './components/hookah/hookah.component';

import { AuthGuard }                from './services/auth-guard.service';

import { loginRoutes,
         authProviders }  from './components/login/login.routing';

const appRoutes: Routes = [
    ...loginRoutes,
    {
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'hookah', component: HookahComponent },
                    { path: 'shop', component: ShopComponent },
                    { path: '', component: ShopComponent }
                ]
            }
        ]
    }
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



