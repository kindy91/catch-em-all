import { Price } from "./price.model";
import { map as _map } from 'lodash/fp';

export class Chocolate {
    id: string;
    name: string;
    brand: string;
    currency: string;
    prices: Price[];

    constructor(data: any = {}) {
        const {id = undefined, name = undefined, brand = undefined, currency = undefined, prices = undefined} = data;

        this.id = id;
        this.name = name;
        this.brand = brand;
        this.currency = currency;
        this.prices = _map((price) => new Price(price))(prices)
    }
}