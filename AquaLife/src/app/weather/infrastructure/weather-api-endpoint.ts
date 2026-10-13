import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { Weather } from '../domain/model/weather-entity';
import { WeatherAssembler } from './weather-assembler';
import { WeatherResponse } from './weather-response';



export class WeatherApiEndpoint {
  private readonly endpointUrl = `${environment.weatherProviderApiBaseUrl}${environment.weatherProviderForecastEndpointPath}`;
  private readonly assembler = new WeatherAssembler();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Weather[]> {
    const params = new HttpParams()
      .set('format', 'json')
    return this.http
      .get<WeatherResponse>(this.endpointUrl, { params })
      .pipe(map((response) => this.assembler.toEntitiesFromResponse(response)));
  }
}
