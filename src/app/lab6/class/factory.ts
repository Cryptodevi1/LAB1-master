import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";
import { Organization } from "./organization";
export class Factory extends Organization implements IWork{
    productionCapacity: number;
     
    constructor(name: string, address: string, productionCapacity: number,shower:IShow) {
        super(name, address);
        this.productionCapacity = productionCapacity;
        shower.show("Name " + this.name + " Address " + this.address + " Production capacity" + this.productionCapacity )
    }

    getInfo() {
        console.log(`Factory: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Production Capacity: ${this.productionCapacity}`);
      }
    
    work(){
        return "Ми львівский завод пива!"
    }
    
}