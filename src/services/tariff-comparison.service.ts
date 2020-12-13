import { ProductA, ProductB } from '../products';
import { Product, Tariff, TariffList } from '../types';

export class TariffComparisonService {
    getTariffs(consumption: number): TariffList {
        let tariffs: Tariff[] = [
            new ProductA().getTariff(consumption),
            new ProductB().getTariff(consumption)
        ];

        // Sort list in ASCENDING order
        tariffs.sort((a, b) => (a.annualCost > b.annualCost) ? -1 : 1);
    
        return { tariffs };
    }
}