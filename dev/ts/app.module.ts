import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing}  from './app.routing';
         
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';

import { AuthGuard }                from './services/auth-guard.service';
import { AuthService }                from './services/auth.service';

import { ShopModule }    from './shop/shop.module'

@NgModule({
    imports:      [ 
        BrowserModule,
        ShopModule,
        routing 
    ],
    declarations: [ 
        AppComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap:    [ AppComponent ],
})

export class AppModule { }
