import { Country } from "./country";
export class CountryList{
    count = new Array();
    constructor(){
    }
    add(country:Country){
        this.count.push(country);
    }
}