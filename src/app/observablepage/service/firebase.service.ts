import { Injectable } from '@angular/core';
import { Country } from './country';
import { Memo } from './memo';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  memoListRef?: AngularFireList<any>;
  countryListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  
  createMemo(memo: Memo) {
     return this.memoListRef?.push({
        count_id: memo.count_id,
        name: memo.name,
     })
  }
  createCountry(country: Country) {
     return this.countryListRef?.push({
        id: country.id,
        name: country.name,
     })
  }

  getRecord(id: string, bd: string) {
     this.bdRef = this.db.object('/' + bd + id);
     console.log("bdRef = " + this.bdRef.snapshotChanges());
     return this.bdRef;
  }

  getRecordList(bd: string, op: boolean) {
     if (op) {
        this.memoListRef = this.db.list('/' + bd);
        return this.memoListRef;
     } else {
        this.countryListRef = this.db.list('/' + bd);
        return this.countryListRef;
     }
  }

  updateMemo(id: number, memo: Memo, bd: string) {
     this.bdRef = this.db.object('/' + bd + '/' + id);
     return this.bdRef.update({
        count_id: memo.count_id,
        name: memo.name,
     })
  }
  updateCountry(id: number, country: Country, bd: string) {
     this.bdRef = this.db.object('/' + bd + '/' + id);
     return this.bdRef.update({
        id: country.id,
        name: country.name,
     })
  }

  deleteRecord(id: string, bd: string) {
     this.bdRef = this.db.object('/' + bd + '/' + id);
     this.bdRef.remove();
  }
}
