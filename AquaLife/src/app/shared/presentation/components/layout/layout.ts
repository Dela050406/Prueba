import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {FooterContent} from '../footer-content/footer-content';
import {environment} from '../../../../../environments/environment';

/**
 * Main shell component that hosts top-level navigation and routed content.
 * @author Mathias De la Cruz
 */
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, TranslatePipe, LanguageSwitcher, FooterContent],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  /** World Bank logo URL built from the Logo.dev Logo API settings. */
  logoUrl = `${environment.logoProviderApiBaseUrl}${environment.logoProviderDomain}?token=${environment.logoProviderPublishableKey}`;

  /** Navigation options. */
  options = signal([
    { link: '/home',                    label: 'option.home' },
    { link: '/economic-indicators/new', label: 'option.new-economic-indicator' }
  ]);
}
