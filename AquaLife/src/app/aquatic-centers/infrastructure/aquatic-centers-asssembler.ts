import { BaseAssembler } from '../../shared/infrastructure/base-assembler';

import { AquaticCenters } from '../domain/model/aquatic-centers-entity';
import { AquaticCentersResource, AquaticCentersResponse } from './aquatic-centers-response';

export class AquaticCentersAssembler implements BaseAssembler<
  AquaticCenters,
  AquaticCentersResource,
  AquaticCentersResponse
> {
  toEntitiesFromResponse(response: AquaticCentersResponse): AquaticCenters[] {
    return response['aquatic-centers'].map((resource) =>
      this.toEntityFromResource(resource),
    );
  }

  toEntityFromResource(resource: AquaticCentersResource): AquaticCenters {
    return new AquaticCenters({
      id: resource.id,
      name: resource.name,
      activityType: resource.activityType,
      capacity: resource.capacity,
      latitude: resource.latitude,
      longitude: resource.longitude,
    });
  }

  toResourceFromEntity(entity: AquaticCenters): AquaticCentersResource {
    return {
      id: entity.id,
      name: entity.name,
      activityType: entity.activityType,
      capacity: entity.capacity,
      latitude: entity.latitude,
      longitude: entity.longitude,
    } as AquaticCentersResource;
  }
}
