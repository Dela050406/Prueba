import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MyEconomicIndicators} from '../../../../observatories/presentation/components/my-aquatic-centers/my-aquatic-centers';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, MyEconomicIndicators],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
