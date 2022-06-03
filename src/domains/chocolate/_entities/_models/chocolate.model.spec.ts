import { Chocolate } from "./chocolate.model"
import { Price } from "./price.model"

describe('Chocolate', () => {
    const emptyObject: Chocolate = {
        id: undefined!,
        name: undefined!,
        brand: undefined!,
        currency: undefined!,
        prices: [],
    }

    const fullObject: Chocolate = {
        id: '1234',
        name: 'some name',
        brand: 'some brand',
        currency: 'some currency',
        prices: [new Price()],
    }

    describe('when undefined is passed', () => {
        it('should return an empty chocolate', () => {
            const result = new Chocolate();

            expect(result).toEqual(jasmine.objectContaining(emptyObject));
        })
    })

    describe('when empty is passed', () => {
        it('should return an empty chocolate', () => {
            const result = new Chocolate({});

            expect(result).toEqual(jasmine.objectContaining(emptyObject));
        })
    })

    describe('when value is passed', () => {
        it('should return a full chocolate', () => {
            const result = new Chocolate(fullObject);

            expect(result).toEqual(jasmine.objectContaining(fullObject));
        })
    })
})