import { Component, OnInit } from '@angular/core';
import { Memo } from './service/memo';
import { MemoList } from './service/memoList';
import { Country } from './service/country';
import { CountryList } from './service/countryList';
import { ConfigService } from './service/config.service';
import { Observable,BehaviorSubject,Subscription} from 'rxjs';
@Component({
  selector: 'app-lab10',
  templateUrl: './lab10.page.html',
  styleUrls: ['./lab10.page.scss'],
})
export class Lab10Page implements OnInit {
  countrys = new CountryList();
  private configService = new ConfigService();
  private subscription: Subscription[]= [];

  memoList = new MemoList(this.configService);
  country: Country = new Country();

  count = 0;
  constructor() { }
  ngOnInit() {
    const countSub = this.configService.count$
      .subscribe(()=>{this.country =this.configService.count$.value;});
      this.subscription.push(countSub);
  }
  
  nextCountry()
  {
    if(this.count<this.countrys.count.size-1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setCount(this.countrys.count.get(this.count));
  }

  addMemo(name:any){
    let memo = new Memo();
    memo.name = name;
    memo.count_id = this.country.id;
    this.memoList.add(memo);
  }

  addCountry(c1: any){
    let c = new Country();
    c.id = this.countrys.count.size;
    c.name = c1;
    this.countrys.add(c);
  }
  ngOnDestroy(){
    this.subscription
      .forEach(s=>s.unsubscribe());
  }
}