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
import { AquaticCenters } from '../../../domain/model/aquatic-centers-entity';
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

  latestObservation = this.aquaticCentersStore.latestAvailableObservation;

  form = this.fb.group({
    activityType: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    participantName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    participants: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  loading = this.aquaticCentersStore.loading;

  hasNoValue = computed(
    () => this.isSelectionComplete() && !this.loading() && this.latestObservation() === null,
  );

  canCreate = computed(
    () => this.isSelectionComplete() && !this.loading() && this.latestObservation() !== null,
  );


  onSelectionChange(): void {
    this.aquaticCentersStore.loadObservations(
      this.form.controls.participantName.value,
      this.form.controls.participants.value,
    );
  }

  submit(): void {
    const reservation = this.latestObservation();
    const reservations = this.reservation();
    if (this.form.invalid || !reservation || reservation.value === null || !reservations) return;

    const country = this.aquaticCentersStore.getReservations(this.form.controls.activityType.value);
    const item = new Reservation({
      id: 0,
      activityType: this.form.controls.activityType.value,
      participantName: this.form.controls.participantName.value,
      participants: this.form.controls.participants.value,
    });

    this.aquaticCentersStore.addReservation(item);
    this.router.navigate(['/home']).then();
  }

  cancel(): void {
    this.aquaticCentersStore.clearObservations();
    this.router.navigate(['/home']).then();
  }
}
