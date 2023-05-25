import { Show_Console } from './show_console';
import { Show_Desktop } from './show_desktop';
import { Insurance } from './insurance';
import { Gascompany } from './gascompany';
describe('Insurance and GasOilCompany Testing', () => {
let shower: Show_Console;
let shower1: Show_Desktop;
let insurance: Insurance;
let gascompany: Gascompany;
beforeEach(() => {
shower = new Show_Console();
shower1 = new Show_Desktop();
gascompany = new Gascompany ("UkrTransNafta","island Kipr, Central 1","Oil",shower); 
insurance = new Insurance ("Better Call Soul ","island Kipr, Central 1","Private",shower1); 
})
fit ("Створення екземпляру класу Shower", () => {
expect (shower).toBeTruthy();
})
fit ("Створення екземпляру класу Shower Desktop", () => {
    expect (shower1).toBeTruthy();
})
fit ("Створення екземпляру класу Insurance", () => {
    expect (insurance).toBeTruthy();
})
fit ("Створення екземпляру класу Gascompany", () => {
    expect (gascompany).toBeTruthy();
})
});