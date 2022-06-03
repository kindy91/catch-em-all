import { Component } from '@angular/core';
import { ChocolateAppService } from '../_app-service/chocolate-app.service';

@Component({
  selector: 'app-chocolate-detail',
  templateUrl: './chocolate-detail.component.html',
})
export class ChocolateDetailComponent {

  constructor(readonly appService: ChocolateAppService) { }
}
