import { Lightweight } from "./lightweight";

describe("тестування класу Lightweight",() => {
    let lw:Lightweight;
    beforeEach(()=>{
        lw = new Lightweight("Nissan", 5000)
    })

    fit("Створення екземпляру класу",()=>{
        expect(lw).toBeTruthy();
    })

    fit("Розрахунок витрат палива для легкового авто nissan з об'ємом 5л, очікуваний результат 12500", ()=>{
        lw.S();
        let res = lw.result;
        let res2 = 5000*2.5;
        expect(res).toBe(res2);
    })
})