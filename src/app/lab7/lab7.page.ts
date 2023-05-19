import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
   selector: 'app-lab7',
   templateUrl: './lab7.page.html',
   styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page implements OnInit {

   @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
   lineChart: any;
   xx: string[] = [];
   yy: number[] = [];
   constructor(private tabService: TabService, private seriesService: SeriesService, private recursionService: RecursionService) {Chart.register(...registerables);}
   
   lineChartMethod() {
      if (this.lineChart instanceof Chart) {
         this.lineChart.destroy();
      }

      this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
         type: 'line',
         data: {
            labels: this.xx,
            datasets: [
               {
                  label: 'Графік функції',
                  fill: false,
                  borderColor: 'rgba(75,192,192,1)',
                  borderDashOffset: 0.0,
                  pointRadius: 1,
                  data: this.yy,
                  spanGaps: false,
               }
            ]
         }
      });
   }
   
   
   xyTab = new Map();
   xySeries = new Map();
   xyRecursion = new Map();
   xyInput = new Map();
   ras (xn: any,xk:any,h:any ){
      let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
      console.log("Табулювання");
      this.xyTab = this.tabService.getTab(xn1,xk1,h1);
      console.log("Ряд");
      this.xySeries = this.seriesService.getTab(xn1,xk1,h1);
      console.log("Рекурсія");
      this.xyRecursion = this.recursionService.getTab(xn1,xk1,h1);
      for (let x = xn1; x <= xk1; x += h1) {
         this.xx.push(x.toFixed(1));
         this.yy.push(parseFloat(this.xyTab.get(x).toFixed(1)));
      }
      this.lineChartMethod();
      this.input();
   }
   input() {
      this.xyTab.forEach((value, key, map) => {
         let s = ' ';
         let y: number = 0;
         y = value;
         s = y.toFixed(4) + " ";
         y = this.xySeries.get(key);
         s = s + y.toFixed(4);
         y = this.xyRecursion.get(key);
         s = s + " " + y.toFixed(4);
         let x = key;
         this.xyInput.set(x.toFixed(2), s);
      })
   }
   ngOnInit() {
      
   }
      
   


}
