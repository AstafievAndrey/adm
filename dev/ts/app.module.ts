import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing}  from './app.routing';
         
import { AppComponent }   from './app.component';
import { LoginComponent }   from './modules/login/login.component';

import { AuthGuard }                from './services/auth-guard.service';
import { AuthService }                from './services/auth.service';
import { CityService }                from './services/city.service';
import { TypeShopService }                from './services/typeShop.service';
import { ShopService }                from './services/shop.service';

import { ShopModule }    from './modules/shop/shop.module'

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
        AuthService,
        CityService,
        TypeShopService,
        ShopService
    ],
    bootstrap:    [ AppComponent ],
})

export class AppModule { }
