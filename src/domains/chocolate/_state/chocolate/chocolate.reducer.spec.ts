import { Chocolate } from "../../_entities/_models/chocolate.model";
import { loadChocolatesSuccess } from "./chocolate.actions";
import { ChocolateFeatureState } from "./chocolate.entities";
import { chocolateReducer, initialChocolateState } from "./chocolate.reducer";


describe('ChocolateReducer', () => {
  it('should have initial state', () => {
    const expected: ChocolateFeatureState = { ids: [], entities: {}};
    expect(chocolateReducer(initialChocolateState, {} as any)).toEqual(expected);
  });

  describe('loadChocolatesSuccess', () => {
    it('should update the entities', () => {
      const chocolate1 = new Chocolate({id: 1});
      const chocolate2 = new Chocolate({id: 2});
      const expected: ChocolateFeatureState = { ids: [1, 2], entities: {1: chocolate1, 2: chocolate2}};
      const action = loadChocolatesSuccess({chocolates: [chocolate1, chocolate2]});
      expect(chocolateReducer(initialChocolateState, action)).toEqual(expected);
    });
  })
});