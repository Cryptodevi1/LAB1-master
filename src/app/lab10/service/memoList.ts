import {ConfigService} from './config.service';
import {Memo} from "./memo"

export class MemoList
{
    private memoList = new Array();
    private searchMemo= new Array();

    searchMemoResult:string[] = [];

    countrySub = this.configService.count$
        .subscribe(()=>{

        let country = this.configService.count$.value;
        this.search(country.id);
        });
        constructor(private configService:ConfigService)
        {
            let memo = new Memo();
            memo.name= "Золоті Ворота"
            memo.count_id=0;
            this.add(memo);
            let memo1 = new Memo();
            memo1.name= "Асканія Нова"
            memo1.count_id=1;
            this.add(memo1);
         this.search(0)
        }

    add(memo: Memo){
        this.memoList.push(memo);
        this.search(memo.count_id);
    }
    search(id1:number){
        this.searchMemo=this.memoList.filter((memo)=>{
            return memo.count_id == id1; 
        })
        this.searchMemoResult = [];
        this.searchMemo.forEach(el => {
            this.searchMemoResult.push('Назва:' + el.name);
        });
    }
}