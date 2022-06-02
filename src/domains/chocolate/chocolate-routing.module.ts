import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolateDetailComponent } from './chocolate-detail/chocolate-detail.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ChocolateListComponent
      },
      {
        path: 'detail',
        component: ChocolateDetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChocolateRoutingModule { }
