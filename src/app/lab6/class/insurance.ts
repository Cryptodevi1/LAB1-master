import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";
import { Organization } from "./organization";
export class Insurance extends Organization implements IWork{
    policyTypes: string;
    constructor(name: string, address: string, policyTypes: string, shower:IShow) {
        super(name, address);
        this.policyTypes = policyTypes;
        shower.show("Name " + this.name + " Address " + this.address + "Policytypes " + this.policyTypes)
      }

    work(){
        return "Ми страхова компанія"
    }

    getInfo() {
        console.log(`Insurance Company: ${this.name}`);
        console.log(`Address: ${this.address}`);
      }
    
}