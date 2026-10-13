import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MyEconomicIndicators} from '../../../../observatories/presentation/components/my-economic-indicators/my-economic-indicators';

/**
 * Home view — shows the platform description and the registered indicator items.
 * @author Mathias De la Cruz
 */
@Component({
  selector: 'app-home',
  imports: [TranslatePipe, MyEconomicIndicators],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
