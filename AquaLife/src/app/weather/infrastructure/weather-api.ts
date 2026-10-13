import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {CurrentWeather} from '../domain/model/current-weather.entity';
import {CurrentWeatherApiEndpoint} from './current-weather-api-endpoint';

/**
 * @author Nickolas Ramirez
 */
@Service()
export class WeatherApi extends BaseApi {
  private readonly currentWeatherEndpoint = new CurrentWeatherApiEndpoint(inject(HttpClient));

  getCurrentWeather = (latitude: number, longitude: number): Observable<CurrentWeather> =>
    this.currentWeatherEndpoint.getByCoordinates(latitude, longitude);
}
