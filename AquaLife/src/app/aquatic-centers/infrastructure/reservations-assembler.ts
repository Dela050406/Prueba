import { BaseAssembler } from '../../shared/infrastructure/base-assembler';

import { Reservations } from '../domain/model/reservations-entity';
import { ReservationsResource, ReservationsResponse } from './reservations-response';

export class ReservationsAssembler implements BaseAssembler<  Reservations,  ReservationsResource,  ReservationsResponse
> {
  toEntitiesFromResponse(response: ReservationsResponse): Reservations[] {
    return response['reservations'].map((resource) => this.toEntityFromResource(resource));
  }

  toEntityFromResource(resource: ReservationsResource): Reservations {
    return new Reservations({
      aquaticCenterId: resource.aquaticCenterId,
      activityType: resource.activityType,
      participantName: resource.participantName,
      participants: resource.participants,
      weatherTemperature: resource.weatherTemperature,
      reservedAt: resource.reservedAt,
    });
  }

  toResourceFromEntity(entity: Reservations): ReservationsResource {
    return {
      aquaticCenterId: entity.aquaticCenterId,
      activityType: entity.activityType,
      participantName: entity.participantName,
      participants: entity.participants,
      weatherTemperature: entity.weatherTemperature,
      reservedAt: entity.reservedAt,
    } as ReservationsResource;
  }
}
