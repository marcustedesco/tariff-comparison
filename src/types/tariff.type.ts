export interface TariffList {
    tariffs: Tariff[];
}

export interface Tariff {
    name: string;
    annualCost: number;
}