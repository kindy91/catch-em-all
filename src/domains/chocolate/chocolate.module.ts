import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { ChocolateDetailComponent } from './chocolate-detail/chocolate-detail.component';
import { ChocolateRoutingModule } from './chocolate-routing.module';
import { ChocolateStateModule } from './_state/state.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ChocolateListComponent,
    ChocolateDetailComponent
  ],
  imports: [
    CommonModule,
    ChocolateRoutingModule,
    ChocolateStateModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ChocolateModule { }
