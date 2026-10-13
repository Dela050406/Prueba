
export interface CurrentWeatherResource {
  time: string;
  interval: number;
  temperature_2m: number;
}

export interface CurrentWeatherUnitsResource {
  time: string;
  interval: string;
  temperature_2m: string;
}

export interface CurrentWeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_units: CurrentWeatherUnitsResource;
  current: CurrentWeatherResource;
}
