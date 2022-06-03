import { setSelectedChocolateId } from "./chocolate-interaction.actions";
import { ChocolateInteractionFeatureState } from "./chocolate-interaction.entities";
import { chocolateInteractionReducer, initialChocolateInteractionState } from "./chocolate-interaction.reducer";


describe('ChocolateInteractionReducer', () => {
  it('should have initial state', () => {
    const expected: ChocolateInteractionFeatureState = { selectedChocolateId: undefined! };
    expect(chocolateInteractionReducer(initialChocolateInteractionState, {} as any)).toEqual(expected);
  });

  describe('setSelectedChocolateId', () => {
    it('should update the selected id', () => {
      const selectedChocolateId = '1234';

      const expected: ChocolateInteractionFeatureState = { selectedChocolateId };
      const action = setSelectedChocolateId({selectedChocolateId});
      expect(chocolateInteractionReducer(initialChocolateInteractionState, action)).toEqual(expected);
    });
  })
});