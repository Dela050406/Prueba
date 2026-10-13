import {Component, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe, DecimalPipe} from '@angular/common';
import { AquaticCenters } from '../../../domain/model/aquatic-centers-entity';

@Component({
  selector: 'app-aquatic-center-summary',
  imports: [MatCardModule, TranslatePipe, DatePipe, DecimalPipe],
  templateUrl: './aquatic-center-summary.html',
  styleUrl: './aquatic-center-summary.css',
})
export class AquaticCenterSummary {
  isEmpty() {
    throw new Error('Method not implemented.');
  }
  item = input.required<AquaticCenters>();
}
