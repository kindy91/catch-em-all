import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { ChocolateDetailComponent } from './chocolate-detail/chocolate-detail.component';
import { ChocolateRoutingModule } from './chocolate-routing.module';
import { ChocolateStateModule } from './_state/state.module';



@NgModule({
  declarations: [
    ChocolateListComponent,
    ChocolateDetailComponent
  ],
  imports: [
    CommonModule,
    ChocolateRoutingModule,
    ChocolateStateModule
  ]
})
export class ChocolateModule { }
