import { Product } from '../types';

export class ProductB implements Product {
    name: string = 'Packaged tariff';
    base: number = 800;
    min: number = 4000; 
    rate: number = 0.3;
    calcTariff(consumption: number): number{
        let price: number = this.base;
        if(consumption > this.min) {
            price += ((consumption - this.min) * this.rate);
        }
        return price;
    }
}
