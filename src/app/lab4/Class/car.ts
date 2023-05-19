export abstract class Car {
    name!: string;
    result!: number;
    constructor() {}
        show(){
            return "Назва=" + this.name + " Результат=" + this.result;
        }
        abstract S(): any;
    }