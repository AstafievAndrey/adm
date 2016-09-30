import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { shopRouting}  from './shop.routing';
import { FormsModule }      from '@angular/forms';
         
import { ShopComponent }   from './shop.component';
import { ListShopComponent }   from './listShop.component';
import { AddShopComponent }         from './addShop.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
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
