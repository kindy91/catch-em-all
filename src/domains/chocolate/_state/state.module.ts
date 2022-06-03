import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { chocolateFeatureKey } from './chocolate/chocolate.entities';
import { chocolateReducer } from './chocolate/chocolate.reducer';
import { ChocolateEffects } from './chocolate/chocolate.effects';
import { chocolateViewFeatureKey } from './chocolate-view/chocolate-view.entities';
import { ChocolateViewEffects } from './chocolate-view/chocolate-view.effects';
import { chocolateViewReducer } from './chocolate-view/chocolate-view.reducer';
import { chocolateInteractionReducer } from './chocolate-interaction/chocolate-interaction.reducer';
import { chocolateInteractionFeatureKey } from './chocolate-interaction/chocolate-interaction.entities';

@NgModule({
  imports: [
    EffectsModule.forFeature([ChocolateViewEffects, ChocolateEffects]),
    StoreModule.forFeature(chocolateFeatureKey, chocolateReducer),
    StoreModule.forFeature(chocolateViewFeatureKey, chocolateViewReducer),
    StoreModule.forFeature(chocolateInteractionFeatureKey, chocolateInteractionReducer),
  ],
})
export class ChocolateStateModule {}
