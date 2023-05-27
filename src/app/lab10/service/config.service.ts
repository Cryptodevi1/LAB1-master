import { Injectable } from '@angular/core';
import { CountryList } from './countryList';
import { Country } from './country';
import { Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  currentCountry=DEFAULT_COUNT;
  count$: BehaviorSubject<Country> = new BehaviorSubject<Country>(DEFAULT_COUNT);

  setCount(count:Country){
    console.log("Є зміни!")
    this.count$.next(count)
  }

  constructor() { }
}
var countryList=new CountryList();
const DEFAULT_COUNT=countryList.count.get(0);