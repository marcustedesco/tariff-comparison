import { Product, Tariff } from '../types';

export class ProductA implements Product {
    name: string = 'basic electricity tariff';

    private _baseCostPerMonth: number = 5;
    private _ratePerKWH: number = 0.22;
    private _numMonths: number = 12;

    private calcTariffCost(consumption: number): number {
        let cost: number = this._baseCostPerMonth * this._numMonths;
        cost += consumption * this._ratePerKWH;
        return cost;
    }

    getTariff(consumption: number): Tariff {
        return {
            name: this.name,
            annualCost: this.calcTariffCost(consumption)
        }
    }
}