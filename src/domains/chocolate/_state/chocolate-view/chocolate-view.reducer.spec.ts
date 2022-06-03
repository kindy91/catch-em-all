import { ChocolateViewData } from "../../_entities/_interfaces/chocolate-view-data.interface";
import { enrichViewData } from "./chocolate-view.actions";
import { ChocolateViewFeatureState } from "./chocolate-view.entities";
import { chocolateViewReducer, initialChocolateViewState } from "./chocolate-view.reducer";


describe('ChocolateViewReducer', () => {
  it('should have initial state', () => {
    const expected: ChocolateViewFeatureState = { ids: [], entities: {}};
    expect(chocolateViewReducer(initialChocolateViewState, {} as any)).toEqual(expected);
  });

  describe('enrichViewData', () => {
    it('should update the entities', () => {
      const viewData1 = {id: '1'} as ChocolateViewData;
      const viewData2 = {id: '2'} as ChocolateViewData;
      
      const expected: ChocolateViewFeatureState = { ids: ['1', '2'], entities: {1: viewData1, 2: viewData2}};
      const action = enrichViewData({viewData: [viewData1, viewData2]});
      expect(chocolateViewReducer(initialChocolateViewState, action)).toEqual(expected);
    });
  })
});