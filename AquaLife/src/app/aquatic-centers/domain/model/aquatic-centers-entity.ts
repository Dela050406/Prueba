export class AquaticCentersEntity {
  private _id: number;
  private _name: string;
  private _activityType: string;
  private _capacity: number;
  private _latitude: number;
  private _longitude: number;

  constructor(id: number, name: string, activityType: string, capacity: number, latitude: number, longitude: number,)
  {
    this._id = id;
    this._name = name;
    this._activityType = activityType;
    this._capacity = capacity;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get activityType(): string {
    return this._activityType;
  }

  set activityType(value: string) {
    this._activityType = value;
  }

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

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
}
