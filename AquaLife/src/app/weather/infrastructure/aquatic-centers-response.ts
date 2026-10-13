import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';


export interface AquaticCentersResource extends BaseResource {
  id: number;
  name: string;
  activityType: string;
  capacity: number;
  latitude: number;
  longitude: number;
}

export interface AquaticCentersResponse extends BaseResponse {
  'economic-observatories': AquaticCentersResource[];
}
