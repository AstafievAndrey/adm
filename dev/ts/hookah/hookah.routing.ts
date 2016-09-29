import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }                from '../services/auth-guard.service';
import { HookahComponent }    from './hookah.component';
import { ListHookahComponent }    from './listHookah.component';

const hookahRoutes: Routes = [
    { 
        path: 'hookah',  
        component: HookahComponent, 
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', component: ListHookahComponent }
                ]
            }
        ]
    },
];

export const hookahRouting: ModuleWithProviders = RouterModule.forChild(hookahRoutes);