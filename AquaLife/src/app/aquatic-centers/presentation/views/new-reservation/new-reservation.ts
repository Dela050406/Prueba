import {Component, computed, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {DecimalPipe} from '@angular/common';
import {Reservation} from '../../../domain/model/reservations-entity';
import { AquaticCentersStore } from '../../../application/aquatic-centers.store';

@Component({
  selector: 'app-new-economic-indicator',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    TranslatePipe,
    DecimalPipe,
  ],
  templateUrl: './new-reservation.html',
  styleUrl: './new-reservation.css',
})
export class NewReservation {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private aquaticCentersStore = inject(AquaticCentersStore);

  form = this.fb.group({
    regionCode: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    countryCode: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    indicatorId: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  loading = this.aquaticCentersStore.loading;


  /** Computed: true when the provider reported no usable value for the selection. */
  hasNoValue = computed(
    () => this.isSelectionComplete() && !this.loading() && this.latestObservation() === null,
  );

  /** Computed: true when the registration can be submitted. */
  canCreate = computed(
    () => this.isSelectionComplete() && !this.loading() && this.latestObservation() !== null,
  );

  /** Resets the country and the loaded observations when the region changes. */
  onRegionChange(): void {
    this.form.controls.countryCode.setValue('');
    this.aquaticCentersStore.clearObservations();
  }

  /** Loads the observations once a country and an indicator are selected. */
  onSelectionChange(): void {
    this.aquaticCentersStore.loadObservations(
      this.form.controls.countryCode.value,
      this.form.controls.indicatorId.value,
    );
  }

  submit(): void {
    const observation = this.latestObservation();
    const observatory = this.observatory();
    if (this.form.invalid || !observation || observation.value === null || !observatory) return;

    const country = this.aquaticCentersStore.getReservation(this.form.controls.countryCode.value);
    const item = new Reservation({
      id: 0,
      observatoryId: observatory.id,
      regionCode: this.form.controls.regionCode.value,
      countryCode: observation.countryCode || country?.isoCode || '',
      countryName: observation.countryName || country?.name || '',
      indicatorId: observation.indicatorId,
      indicatorName: observation.indicatorName,
      indicatorValue: observation.value,
      reportYear: observation.reportYear,
      registeredAt: new Date().toISOString(),
    });

    this.aquaticCentersStore.addReservation(item);
    this.router.navigate(['/home']).then();
  }

  cancel(): void {
    this.aquaticCentersStore.clearObservations();
    this.router.navigate(['/home']).then();
  }
}
