import {ConfigService} from './config.service';
import {Memo} from "./memo"

export class MemoList
{
    memoList = new Array();
    searchMemo= new Array();

    countrySub = this.configService.count$
        .subscribe(()=>{

        let country = this.configService.count$.value;
        this.search(country.id);
        });
        constructor(private configService:ConfigService)
        {}

    add(memo: Memo){
        this.memoList.push(memo);
        this.search(memo.count_id);
    }
    search(id1:number){
        this.searchMemo=this.memoList.filter((memo)=>{
            return memo.count_id == id1; 
        })
    }
}