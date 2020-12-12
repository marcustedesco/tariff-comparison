import { Product } from '../types';

export class ProductA implements Product {
    name: string = 'basic electricity tariff';
    base: number = 5;
    min: number = 0; 
    rate: number = 0.22;
    calcTariff(consumption: number): number {
        let price: number = this.base;
        if(consumption > this.min) {
            price += ((consumption - this.min) * this.rate);
        }
        return price;
    }
}