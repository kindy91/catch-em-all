import { ChocolateInteractionFeatureState } from "./chocolate-interaction.entities";
import { selectedChocolateIdSelector } from "./chocolate-interaction.selectors";

describe('ChocolateInteractionSelectors', () => {
    const state: ChocolateInteractionFeatureState = { selectedChocolateId: '1234' };

    describe('selectedChocolateIdSelector', () => {
        it('should return the selected chocoalte id', () => {
            expect(selectedChocolateIdSelector.projector(state)).toBe('1234');
        })
    })
})