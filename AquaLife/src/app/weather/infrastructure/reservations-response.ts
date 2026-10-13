import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface ReservationsResource extends BaseResource {
  aquaticCenterId: number;
  activityType: string;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reservedAt: number;
}

export interface ReservationsResponse extends BaseResponse {
  'economic-observatories': ReservationsResource[];
}
