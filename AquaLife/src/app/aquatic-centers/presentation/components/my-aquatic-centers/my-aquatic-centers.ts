import {Component, inject} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {TranslatePipe} from '@ngx-translate/core';
import {AquaticCenterSummary} from '../aquatic-center-summary/aquatic-center-summary';

@Component({
  selector: 'app-my-aquatic-centers',
  imports: [MatGridListModule, TranslatePipe, AquaticCenterSummary],
  templateUrl: './my-aquatic-centers.html',
  styleUrl: './my-aquatic-centers.css'
})
export class MyAquaticCenters {
  protected readonly store = inject(AquaticCenterSummary);
}
