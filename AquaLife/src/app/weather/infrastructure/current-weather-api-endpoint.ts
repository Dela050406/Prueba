import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ErrorHandlingEnabledBaseType} from '../../shared/infrastructure/error-handling-enabled-base-type';
import {CurrentWeather} from '../domain/model/current-weather.entity';
import {CurrentWeatherResponse} from './current-weather-response';
import {CurrentWeatherAssembler} from './current-weather-assembler';
import {environment} from '../../../environments/environment';

export class CurrentWeatherApiEndpoint extends ErrorHandlingEnabledBaseType {
  private readonly endpointUrl = `${environment.weatherProviderApiBaseUrl}${environment.weatherProviderForecastEndpointPath}`;
  private readonly assembler = new CurrentWeatherAssembler();

  constructor(private http: HttpClient) {
    super();
  }

  getByCoordinates(latitude: number, longitude: number): Observable<CurrentWeather> {
    const params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set('current', environment.weatherProviderCurrentVariables);
    return this.http.get<CurrentWeatherResponse>(this.endpointUrl, {params}).pipe(
      map(response => this.assembler.toEntityFromResponse(response)),
      catchError(this.handleError('Failed to fetch current weather'))
    );
  }
}
