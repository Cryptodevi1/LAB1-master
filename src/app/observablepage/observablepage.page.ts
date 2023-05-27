import { Component, OnInit } from '@angular/core';
import { Memo } from './service/memo';
import { MemoList } from './service/memoList';
import { Country } from './service/country';
import { CountryList } from './service/countryList';
import { ConfigService } from './service/config.service';
import { Observable,BehaviorSubject,Subscription} from 'rxjs';
import { FirebaseService } from './service/firebase.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  countrys = new CountryList();
  private configService = new ConfigService();
  private subscription: Subscription[]= [];

  memoList = new MemoList(this.configService);
  country: Country = new Country();

  count = 0;
  bdMemo = 'Memo';
  bdDCountry = 'Country';
  constructor(public fbService:FirebaseService) { }
  ngOnInit() {
    this.fetchTask(this.bdMemo,true);
    let taskRes = this.fbService.getRecordList(this.bdMemo, true);
    taskRes.snapshotChanges().subscribe()

    this.fetchTask(this.bdDCountry, false);
    let taskRes1 = this.fbService.getRecordList(this.bdDCountry, false);
      taskRes1.snapshotChanges().subscribe()

    const countSub = this.configService.count$
      .subscribe(()=>{this.country =this.configService.count$.value;});
      this.subscription.push(countSub);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
       console.log(res)
       if (op) {
          this.memoList.memoList = res;
       } else {
          this.countrys.count = res;
          this.country = this.countrys.count[this.count];
          this.memoList.search(this.country.id);
       }
    })
 }
  
  nextCountry()
  {
    if(this.count<this.countrys.count.length-1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setCount(this.countrys.count[this.count]);
  }

  addMemo(name:any){
    let memo = new Memo();
    memo.name = name;
    memo.count_id = this.country.id;
    this.fbService.createMemo(memo);
    this.memoList.search(this.country.id)
  }

  addCountry(c1: any){
    let c = new Country();
    c.id = this.countrys.count.length+1;
    c.name = c1;
    this.fbService.createCountry(c);
  }
  ngOnDestroy(){
    this.subscription
      .forEach(s=>s.unsubscribe());
  }
}
