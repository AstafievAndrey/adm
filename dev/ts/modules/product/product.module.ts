import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { productRouting}  from './product.routing';
         
import { ProductComponent }   from './product.component';
import { ListProductComponent }   from './components/listProduct.component';
import { AddProductComponent }   from './components/addProduct.component';

@NgModule({
    imports:      [ 
        FormsModule,
        BrowserModule,
        productRouting
    ],
    declarations: [ 
        ProductComponent,
        ListProductComponent,
        AddProductComponent
    ],
    providers: [
        
    ],
    bootstrap:    [ ProductComponent ],
})

export class ProductModule { }
