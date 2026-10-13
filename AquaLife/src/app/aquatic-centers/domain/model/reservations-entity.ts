
export class Reservations {
  private _aquaticCenterId: number;
  private _activityType: string;
  private _participantName: string;
  private _participants: number;
  private _weatherTemperature: number;
  private _reservedAt: number;

  constructor(
    aquaticCenterId: number,
    activityType: string,
    participantName: string,
    participants: number,
    weatherTemperature: number,
    reservedAt: number,
  ) {
    this._aquaticCenterId = aquaticCenterId;
    this._activityType = activityType;
    this._participantName = participantName;
    this._participants = participants;
    this._weatherTemperature = weatherTemperature;
    this._reservedAt = reservedAt;
  }

  get aquaticCenterId(): number {
    return this._aquaticCenterId;
  }

  set aquaticCenterId(value: number) {
    this._aquaticCenterId = value;
  }

  get activityType(): string {
    return this._activityType;
  }

  set activityType(value: string) {
    this._activityType = value;
  }

  get participantName(): string {
    return this._participantName;
  }

  set participantName(value: string) {
    this._participantName = value;
  }

  get participants(): number {
    return this._participants;
  }

  set participants(value: number) {
    this._participants = value;
  }

  get weatherTemperature(): number {
    return this._weatherTemperature;
  }

  set weatherTemperature(value: number) {
    this._weatherTemperature = value;
  }

  get reservedAt(): number {
    return this._reservedAt;
  }

  set reservedAt(value: number) {
    this._reservedAt = value;
  }

  get hasValue(): boolean {
    return this._aquaticCenterId !== null;
  }
}
