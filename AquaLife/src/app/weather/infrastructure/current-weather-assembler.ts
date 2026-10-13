import {CurrentWeather} from '../domain/model/current-weather.entity';
import {CurrentWeatherResponse} from './current-weather-response';


export class CurrentWeatherAssembler {
  toEntityFromResponse = (response: CurrentWeatherResponse): CurrentWeather =>
    new CurrentWeather({
      latitude: response.latitude,
      longitude: response.longitude,
      temperature: Number(response.current?.temperature_2m),
      temperatureUnit: response.current_units?.temperature_2m ?? '°C',
      measuredAt: new Date(response.current?.time)
    });
}
