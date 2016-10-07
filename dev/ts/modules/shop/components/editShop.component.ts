import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Shop } from '../../../objects/shop';

import { ShopService } from '../../../services/shop.service';
import { CityService } from '../../../services/city.service';
import { TypeShopService } from '../../../services/typeShop.service';

@Component({
    templateUrl:'app/html/shop.component.html'
})

export class EditShopComponent{
    
    shop:Shop;
    
    constructor(public cityService:CityService,public typeShopService:TypeShopService,
                private route: ActivatedRoute, private shopService:ShopService){}
    
    ngOnInit():void{
        this.cityService.getCities();
        this.typeShopService.getTypes();
        this.route.params.forEach((params:Params)=>{
            this.shop = this.shopService.getShop(params['id']);
        });
    }
    
    onSubmit(){
        console.log(this.shop);
    }
    
}


