import { Injectable } from '@angular/core';
import { Shop } from '../objects/shop';

@Injectable()
export class ShopService {
    
    shops:Shop[];
    
    getShops(){
        if(this.shops===undefined){
            this.shops = [{
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
                            {id:0,name:"Понедельник",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:1,name:"Вторник",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:2,name:"Среда",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:3,name:"Четверг",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:4,name:"Пятница",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:5,name:"Суббота",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:6,name:"Воскресенье",type_work:"1",work_begin:"1",work_end:"24"}
                        ],
                file:null
            }];
        } 
    }
    
    getShop(id:number){
        return {
                id: id,
                name: 'тест',
                address:'тест',
                phone:'тест',
                site:'тест',
                inst:'тест',
                vk:'тест',
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
                            {id:0,name:"Понедельник",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:1,name:"Вторник",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:2,name:"Среда",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:3,name:"Четверг",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:4,name:"Пятница",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:5,name:"Суббота",type_work:"1",work_begin:"1",work_end:"24"},
                            {id:6,name:"Воскресенье",type_work:"1",work_begin:"1",work_end:"24"}
                        ],
                file:null
            }
    }
    
}