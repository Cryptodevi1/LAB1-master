import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  products: number [] = [];
  constructor() { }
  arrayras(n:any) {
    this.a = [];
    try {
      this.n = parseInt(n);
      if(isNaN(this.n) == true)
      {
        throw new Error('Parameter is not a number!');
      }
      if(n <= 0)
      {
        throw new Error('Parameter less than zero!');
      }
      
      let i: number = 0, j:number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      for(i = 0; i < this.n; i++)
      {
        this.a[i] = Array(this.n);

        for(j = 0; j < this.n; j++)
        {
          let aa: number = Math.floor(Math.random() * 10) + 1;
          this.a[i][j] = aa;
        }
        console.log(this.a);
      }
        // рахуємо добуток кожного стовпчика матриці
        for (let j = 0; j < this.n; ++j) 
        {
          let product = 1;
          for (let i = 0; i < this.n; ++i)
          {
            product *= this.a[i][j];
          }
          this.products.push(product);
        }
    }
    
    catch(error)
    {
      console.log(error);
    }
  }
  getColor(j: number) {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    return colors[j % colors.length];
  }
  ngOnInit () {

  }
}