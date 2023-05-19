import { IShow } from "../interface/ishow";
export class Show_Console implements IShow{
    show(s:string){
        console.log(s);
    }
}