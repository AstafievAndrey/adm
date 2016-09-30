import { Component } from '@angular/core';

import { Shop } from '../objects/shop';

@Component({
    templateUrl:'app/html/addShop.component.html'
})

export class AddShopComponent{
    
    shop:Shop;
    
    constructor(){
        this.shop = {
                        id: null,
                        name: null,
                        address:null,
                        phone:null,
                        site:null,
                        inst:null,
                        vk:null,
                        city_id:1,
                        type_id:1,
                        short_desc:'',
                        desc:'',
                        parking:"false",
                        alcohol:"false",
                        food:"false",
                        veranda:"false",
                        console:"false",
                        board_game:"false"
                    }
    }
    
        
    onSubmit(){
        console.log(this.shop);
    }
    
}
