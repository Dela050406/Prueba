import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../shared/infrastructure/base-api';
import { AquaticCentersEndpoint } from './aquatic-centers-endpoint';
import { ReservationsEndpoint } from './reservations-endpoint';
import { AquaticCenters } from '../domain/model/aquatic-centers-entity';
import { Reservations } from '../domain/model/reservations-entity';


/**
 * Infrastructure facade for observatories endpoint operations.
 * @author Mathias De la Cruz
 */
@Service()
export class AquaticCentersApi extends BaseApi {
  private readonly http = inject(HttpClient);
  private readonly aquaticCentersEndpoint = new AquaticCentersEndpoint(this.http);
  private readonly reservationsEndpoint = new ReservationsEndpoint(this.http);

  getAquaticCenters(): Observable<AquaticCenters[]> {
    return this.aquaticCentersEndpoint.getAll();
  }
  getReservations(): Observable<Reservations[]> {
    return this.reservationsEndpoint.getAll();
  }
  createReservations(item: Reservations): Observable<Reservations> {
    return this.reservationsEndpoint.create(item);
  }
}
