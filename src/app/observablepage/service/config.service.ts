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
const DEFAULT_COUNT={"id":1, "name":"Укр"};