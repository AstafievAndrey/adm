import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { routing}           from './app.routing';
         
import { AppComponent }     from './app.component';
import { LoginComponent }   from './modules/login/login.component';

import { AuthGuard }        from './services/auth-guard.service';
import { AuthService }      from './services/auth.service';
import { CityService }      from './services/city.service';
import { CategoryService }  from './services/category.service';
import { ShopService }      from './services/shop.service';
import { ProductService }   from './services/product.service';

import { ShopModule }       from './modules/shop/shop.module';
import { ProductModule }    from './modules/product/product.module';
import { FileModule }       from './modules/file/file.module';

@NgModule({
    imports:      [ 
        BrowserModule,
        ShopModule,
        ProductModule,
        FileModule,
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
        CategoryService,
        ShopService,
        ProductService
    ],
    bootstrap:    [ AppComponent ],
})

export class AppModule { }
