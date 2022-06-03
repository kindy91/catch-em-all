import { ChocolateViewData } from "../../_entities/_interfaces/chocolate-view-data.interface";
import { ChocolateViewFeatureState } from "./chocolate-view.entities";
import { chocolatesViewDataEntitiesSelector, chocolatesViewDataSelector } from "./chocolate-view.selectors";

describe('ChocolateViewSelectors', () => {
    const viewData1 = {id: '1'} as ChocolateViewData;
    const viewData2 = {id: '2'} as ChocolateViewData;
    const state: ChocolateViewFeatureState = { ids: [1, 2], entities: {1: viewData1, 2: viewData2}};

    describe('chocolatesViewDataSelector', () => {
        it('should return the chocolates view data as list', () => {
            expect(chocolatesViewDataSelector.projector(state)).toEqual([viewData1, viewData2]);
        })
    })

    describe('chocolatesViewDataEntitiesSelector', () => {
        it('should return the chocolates view data as dictionary', () => {
            expect(chocolatesViewDataEntitiesSelector.projector(state)).toEqual({
                1: viewData1, 2: viewData2
            });
        })
    })
})