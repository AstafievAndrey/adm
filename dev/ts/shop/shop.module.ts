import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { shopRouting}  from './shop.routing';
         
import { ShopComponent }   from './shop.component';
import { ListShopComponent }   from './listShop.component';
import { AddShopComponent }         from './addShop.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        shopRouting 
    ],
    declarations: [ 
        ShopComponent,
        ListShopComponent,
        AddShopComponent
    ],
    providers: [

    ],
    bootstrap:    [ ShopComponent ],
})

export class ShopModule { }
