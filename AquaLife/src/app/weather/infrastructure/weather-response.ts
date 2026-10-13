
export interface WeatherResource {
  id?: string;
  iso2code?: string;
  value?: string;
}

export type WeatherResponse = [any, WeatherResource[]];
