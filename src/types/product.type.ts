
export interface Product {
    name: string;
    base: number;
    min: number;
    rate: number;
    calcTariff(consumption: number): number;
}