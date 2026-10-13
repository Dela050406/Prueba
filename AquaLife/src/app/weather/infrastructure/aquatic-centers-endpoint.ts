import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AquaticCentersAssembler } from './aquatic-centers-asssembler';
import { AquaticCenters } from '../domain/model/aquatic-centers-entity';
import { AquaticCentersResource, AquaticCentersResponse } from './aquatic-centers-response';

export class AquaticCentersEndpoint extends BaseApiEndpoint<
  AquaticCenters,
  AquaticCentersResource,
  AquaticCentersResponse,
  AquaticCentersAssembler > {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderAquaticCentersEndpointPath}`,
      new AquaticCentersAssembler(),
    );
  }
}
