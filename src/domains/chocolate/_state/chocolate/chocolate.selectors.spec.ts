import { Chocolate } from "../../_entities/_models/chocolate.model";
import { ChocolateFeatureState } from "./chocolate.entities";
import { chocolatesEntitiesSelector, chocolatesSelector, selectedChocolateSelector } from "./chocolate.selectors";

describe('ChocolateSelectors', () => {
    const chocolate1 = new Chocolate({id: 1});
    const chocolate2 = new Chocolate({id: 2});
    const state: ChocolateFeatureState = { ids: [1, 2], entities: {1: chocolate1, 2: chocolate2}};

    describe('chocolatesSelector', () => {
        it('should return the chocolates as list', () => {
            expect(chocolatesSelector.projector(state)).toEqual([chocolate1, chocolate2]);
        })
    })

    describe('chocolatesEntitiesSelector', () => {
        it('should return the chocolates as dictionary', () => {
            expect(chocolatesEntitiesSelector.projector(state)).toEqual({
                1: chocolate1, 2: chocolate2
            });
        })
    })

    describe('selectedChocolateSelector', () => {
        it('should return the selected chocolate', () => {
            const entities = chocolatesEntitiesSelector.projector(state);
            
            expect(selectedChocolateSelector
                .projector(entities, 1)).toEqual(chocolate1);
        })
    })
})