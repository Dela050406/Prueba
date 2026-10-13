import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Displays localized footer text with the developer information.
 * @author Mathias De la Cruz
 */
@Component({
  selector: 'app-footer-content',
  imports: [TranslatePipe],
  templateUrl: './footer-content.html',
  styleUrl: './footer-content.css'
})
export class FooterContent {
  /** Institutional code of the developer. */
  protected developerCode = 'U202424059';

  /** Full name of the developer. */
  protected developerName = 'Mathias De la Cruz';
}
