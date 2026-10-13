import { Weather } from '../domain/model/weather-entity';
import { WeatherResource, WeatherResponse } from './weather-response';


export class WeatherAssembler {

  toEntitiesFromResponse(response: WeatherResponse): Weather[] {
    const resources = Array.isArray(response) && Array.isArray(response[1]) ? response[1] : [];
    return resources
      .map(resource => this.toEntityFromResource(resource))
  }

  toEntityFromResource(resource: WeatherResource): Weather {
    return new Weather({
      code: resource.iso2Code ?? '',
      isoCode: resource.id ?? '',
      name: (resource.name ?? '').trim(),
    });
  }
}
