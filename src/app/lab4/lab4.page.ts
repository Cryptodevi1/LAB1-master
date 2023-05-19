import { Component, OnInit } from '@angular/core';

import { Car } from './Class/car';
import { Lightweight } from './Class/lightweight';
import { Hardweight} from './Class/hardweight';
@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class LAB4Page implements OnInit {
  car: Car[] = [];
  max: number =0; 
  max_f:number =0;
  constructor() { }
  getRandomint(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  ras(nn:any){

    this.car = new Array();
    let n = parseInt(nn);
    for (let i = 0; i < n; i++){
      this.car.push(new Hardweight("Вантажівка", this.getRandomint(100)))
      this.car.push(new Lightweight("Легковий авто",this.getRandomint(100)))
    }
    this.max_f=0;
    this.car.forEach((element) => {
      element.S();
      console.log(element.show())
    });
  }
  ngOnInit() {
  }

}
