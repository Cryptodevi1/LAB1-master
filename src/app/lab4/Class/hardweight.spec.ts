import { Hardweight } from "./hardweight";

describe("тестування класу Hardweight",() => {
    let hw:Hardweight;
    beforeEach(()=>{
        hw = new Hardweight("Man", 50000)
    })

    fit("Створення екземпляру класу",()=>{
        expect(hw).toBeTruthy();
    })

    fit("Розрахунок витрат палива для вантажівка MAN з вантажопідйомністю 50т, очікуваний результат 5000000", ()=>{
        hw.S();
        let res = hw.result;
        let res2 = 50000*100;
        expect(res).toBe(res2);
    })
})