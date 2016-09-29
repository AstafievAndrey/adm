import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { hookahRouting}  from './hookah.routing';
         
import { HookahComponent }   from './hookah.component';
import { ListHookahComponent }   from './listHookah.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        hookahRouting 
    ],
    declarations: [ 
        HookahComponent,
        ListHookahComponent
    ],
    providers: [

    ],
    bootstrap:    [ HookahComponent ],
})

export class HookahModule { }
