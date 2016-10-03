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
                        board:"false",
                        shedule:[   
                                    {id:0,name:"Понедельник",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:1,name:"Вторник",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:2,name:"Среда",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:3,name:"Четверг",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:4,name:"Пятница",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:5,name:"Суббота",type_work:"1",work_begin:"0",work_end:"24"},
                                    {id:6,name:"Воскресенье",type_work:"1",work_begin:"0",work_end:"24"}
                                ]
                    }
    }
    
        
    onSubmit(){
        console.log(this.shop);
    }
    
}
