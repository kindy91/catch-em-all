import { Price } from "./price.model"

describe('Price', () => {
    const emptyObject: Price = {
        price: undefined!,
        amount: undefined!,
        shop: undefined!,
        unit: undefined!,
        link: undefined!
    }

    const fullObject: Price = {
        price: 10,
        amount: 100,
        shop: 'some shop',
        unit: 'some unit',
        link: 'some link'
    }

    describe('when undefined is passed', () => {
        it('should return an empty price', () => {
            const result = new Price();

            expect(result).toEqual(jasmine.objectContaining(emptyObject));
        })
    })

    describe('when empty is passed', () => {
        it('should return an empty price', () => {
            const result = new Price({});

            expect(result).toEqual(jasmine.objectContaining(emptyObject));
        })
    })

    describe('when value is passed', () => {
        it('should return a full price', () => {
            const result = new Price(fullObject);

            expect(result).toEqual(jasmine.objectContaining(fullObject));
        })
    })
})