import { Injectable } from '@angular/core';
import { TypeShop } from '../objects/typeShop';

@Injectable()
export class TypeShopService {
    
    types:TypeShop[];
    
    getTypes(){
        console.log(this.types);
        if(this.types===undefined){
            this.types = [
                            {id:1,name:"Кальянная"},
                            {id:2,name:"Магазин"},
                            {id:3,name:"Другое"}
                        ];
        } 
    }
    
}