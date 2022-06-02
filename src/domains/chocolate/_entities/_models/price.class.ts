export class Price {
    price: number;
    shop: string;
    link: string;
    unit: string;
    amount: number;

    constructor(data: any = {}) {
        const {price, shop, link, unit, amount} = data;

        this.price = price;
        this.shop = shop;
        this.link = link;
        this.unit = unit;
        this.amount = amount;
    }
}