import { Country } from "./country";
export class CountryList{
    count = new Map();
    constructor(){
        this.count.set(0,{id:0,name:"Ukraine"});
        this.count.set(1,{id:1,name:"Poland"});
    }
    add(country:Country){
        this.count.set(country.id,{id:country.id,name:country.name});
    }
}