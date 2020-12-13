import { Tariff } from "./tariff.type";

export interface Product {
    name: string;

    // The prompt has similar equations but the values 
    // are measured in different units. These vars could be
    // included in Product if the units are standardized or 
    // if a units var were included. Depends on requirements 
    // and expectations for future tariff equations.
    // base: number;
    // min: number;
    // rate: number;

    getTariff(consumption: number): Tariff;
}