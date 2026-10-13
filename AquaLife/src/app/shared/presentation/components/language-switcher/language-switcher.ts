import {Component, inject} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

/**
 * Switches the active locale used by the translation service.
 * @author Mathias De la Cruz
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})
export class LanguageSwitcher {
  /** The currently selected language code. */
  protected currentLang: string = 'en';

  /** List of available language codes. */
  protected languages = ['en', 'es'];

  private translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
    this.currentLang = this.translate.getCurrentLang() ?? 'en';
  }

  /**
   * Changes the application's current language.
   * @param language - The language code to switch to.
   */
  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
