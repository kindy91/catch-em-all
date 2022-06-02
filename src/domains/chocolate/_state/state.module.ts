import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { chocolateFeatureKey } from './chocolate/chocolate.entities';
import { chocolateReducer } from './chocolate/chocolate.reducer';
import { ChocolateEffects } from './chocolate/chocolate.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(chocolateFeatureKey, chocolateReducer),
    EffectsModule.forFeature([ChocolateEffects]),
  ],
})
export class ChocolateStateModule {}
