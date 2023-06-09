export abstract class Organization {
    name!: string;
    address!: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    
    abstract getInfo(): void;
    
}