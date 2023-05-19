import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";
import { Organization } from "./organization";
export class Gascompany extends Organization implements IWork{
    productionType: string;
     
    constructor(name: string, address: string, productionType: string,shower:IShow) {
        super(name, address);
        this.productionType = productionType;
        shower.show("Name " + this.name + " Address " + this.address + " Production " + this.productionType )
    }

    getInfo() {
        console.log(`Oil and Gas Company: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Production Type: ${this.productionType}`);
    }
    
    work(){
        return "Ми нафтогазова компанія!"
    }
    
}