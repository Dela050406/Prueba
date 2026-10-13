
export class Weather {
  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  get longitude(): number {
    return this._longitude;
  }

  set longitude(value: number) {
    this._longitude = value;
  }

  get generationTime_ms(): number {
    return this._generationTime_ms;
  }

  set generationTime_ms(value: number) {
    this._generationTime_ms = value;
  }

  get utc_offset_seconds(): number {
    return this._utc_offset_seconds;
  }

  set utc_offset_seconds(value: number) {
    this._utc_offset_seconds = value;
  }

  get timezone(): string {
    return this._timezone;
  }

  set timezone(value: string) {
    this._timezone = value;
  }

  get timezone_abbreviation(): string {
    return this._timezone_abbreviation;
  }

  set timezone_abbreviation(value: string) {
    this._timezone_abbreviation = value;
  }

  get elevation(): number {
    return this._elevation;
  }

  set elevation(value: number) {
    this._elevation = value;
  }

  private _latitude: number;
  private _longitude: number;
  private _generationTime_ms: number;
  private _utc_offset_seconds: number;
  private _timezone: string;
  private _timezone_abbreviation: string;
  private _elevation: number;

  constructor(weather: {
    latitude: number;
    longitude: number;
    generationTime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
  }) {
    this._latitude = weather.latitude;
    this._longitude = weather.longitude;
    this._generationTime_ms = weather.generationTime_ms;
    this._utc_offset_seconds = weather.utc_offset_seconds;
    this._timezone = weather.timezone;
    this._timezone_abbreviation = weather.timezone_abbreviation;
    this._elevation = weather.elevation;
  }



}
