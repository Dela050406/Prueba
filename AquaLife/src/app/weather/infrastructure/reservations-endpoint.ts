import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Reservations } from '../domain/model/reservations-entity';
import { ReservationsResource, ReservationsResponse } from './reservations-response';
import { ReservationsAssembler } from './reservations-assembler';

export class ReservationsEndpoint extends BaseApiEndpoint<
  Reservations,
  ReservationsResource,
  ReservationsResponse,
  ReservationsAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderAquaticCentersEndpointPath}`,
      new ReservationsAssembler(),
    );
  }
}
