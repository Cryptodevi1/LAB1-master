import { Component, OnInit } from '@angular/core';
import { Show_Console } from './class/show_console';
import { Show_Desktop } from './class/show_desktop';
import { Gascompany} from './class/gascompany';
import { Insurance } from './class/insurance';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {
  }
  ras(){
    let show_con = new Show_Console();
    let show_desk = new Show_Desktop();
    let gascompany = new Gascompany ("UkrTransNafta","island Kipr, Central 1","Oil",show_con); 
    console.log(gascompany.work());
    let insurance = new Insurance ("Better Call Soul ","island Kipr, Central 1","Private",show_desk); 
    this.show = show_desk.info;
    console.log(insurance.work());
  }
}
