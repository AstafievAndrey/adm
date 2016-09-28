import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing}  from './app.routing';
         
import { AppComponent }   from './app.component';
import { AdminDashboardComponent }   from './components/admin-dashboard.component';
import { LoginComponent }   from './components/login/login.component';
import { ShopComponent }   from './components/shop/shop.component';
import { HookahComponent }       from './components/hookah/hookah.component';

import { AuthGuard }                from './services/auth-guard.service';
import { AuthService }                from './services/auth.service';

@NgModule({
    imports:      [ 
        BrowserModule,
        routing 
    ],
    declarations: [ 
        AppComponent,
        AdminDashboardComponent,
        LoginComponent,
        ShopComponent,
        HookahComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap:    [ AppComponent ],
})

export class AppModule { }
