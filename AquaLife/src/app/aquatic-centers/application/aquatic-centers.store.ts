import { computed, DestroyRef, inject, Service, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry } from 'rxjs';
import { AquaticCentersApi } from '../infrastructure/aquatic-centers-api';
import { AquaticCenters } from '../domain/model/aquatic-centers-entity';
import { Reservations } from '../domain/model/reservations-entity';


@Service()
export class AquaticCentersStore {
  private readonly observatoriesApi = inject(AquaticCentersApi);
  private readonly destroyRef = inject(DestroyRef);

  private readonly aquaticCentersSignal = signal<AquaticCenters[]>([]);
  readonly aquaticCenters = this.aquaticCentersSignal.asReadonly();

  private readonly reservationsSignal = signal<Reservations[]>([]);
  readonly reservations = this.reservationsSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  readonly isEmpty = computed(
    () => !this.loadingSignal() && this.reservationsSignal().length === 0,
  );

  constructor() {
    this.loadAquaticCenters();
    this.loadReservations();
  }

  addReservation(reservation: Reservations): void {
    this.loadingSignal.set(true);
    this.observatoriesApi
      .createReservations(reservation)
      .pipe(retry(2))
      .subscribe({
        next: (created) => {
          this.reservationsSignal.update((list) => [...list, created]);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        },
      });
  }

  private loadAquaticCenters(): void {
    this.observatoriesApi
      .getAquaticCenters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (aquaticCenters) => {
          this.aquaticCentersSignal.set(aquaticCenters);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
        },
      });
  }

  private loadReservations(): void {
    this.loadingSignal.set(true);
    this.observatoriesApi
      .getReservations()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (items) => {
          this.reservationsSignal.set(items);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(err.message);
          this.loadingSignal.set(false);
        },
      });
  }

  clearObservations(): void {
    this.reservationsSignal.set([]);
    this.errorSignal.set(null);
  }

  readonly latestAvailableObservation = computed(
    () => this.reservationsSignal().find((observation) => observation.hasValue) ?? null,
  );



}
