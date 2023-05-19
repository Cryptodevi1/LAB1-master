import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() { }
  //Оголосимо змінні у вигляді полів класу та вкажемо їх тип
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  //Метод для разрахунку 
  ras(a:any, b:any, c:any)
  {
    //Перетворимо дані у змінні, використовуючи преведення типів
    try
    {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0;
      //Валідування введення
      if((isNaN(this.a)==true)||(isNaN(this.b)==true)||(isNaN(this.c)==true))
      {
        throw new Error('Parametr is not a number!');
      }
      //Перевірка чисел та розрахунки
      if (this.a % 2 === 0 && this.b % 2 === 0 && this.c % 2 === 0) {
        // якщо всі числа парні, то знайдемо їх добуток
        this.d = this.a * this.b * this.c;
      } else {
        // якщо є хоча б одне непарне число, то знайдемо квадрат суми
        let sum = this.a + this.b + this.c;
        this.d = sum * sum;
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }
}