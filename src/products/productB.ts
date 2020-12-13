import { Product, Tariff } from '../types';

export class ProductB implements Product {
    name: string = 'Packaged tariff';

    private _baseCost: number = 800;
    private _includedConsumptionPerYear: number = 4000; 
    private _additionalConsumptionRatePerKWH: number = 0.3;

    private calcTariffCost(consumption: number): number {
        let cost: number = this._baseCost;
        if(consumption > this._includedConsumptionPerYear) {
            cost += ((consumption - this._includedConsumptionPerYear) * this._additionalConsumptionRatePerKWH);
        }
        return cost;
    }

    getTariff(consumption: number): Tariff {
        return {
            name: this.name,
            annualCost: this.calcTariffCost(consumption)
        }
    }
}
