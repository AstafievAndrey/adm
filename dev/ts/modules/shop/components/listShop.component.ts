import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../objects/shop';
import { ShopService } from '../../../services/shop.service';

@Component({
    templateUrl:'app/html/listShop.component.html',
    styleUrls:['app/css/listShop.component.css'], 
})

export class ListShopComponent implements OnInit{ 
    
    shops:Shop[];
    
    constructor(private shopService:ShopService){}
    
    ngOnInit(){
        this.shops = this.shopService.getShops();
    }
    
}