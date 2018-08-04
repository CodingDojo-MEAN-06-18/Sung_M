export class Weather {
  constructor(
    public humidity: string,
    public temp: string,
    public maxTemp: number,
    public minTemp: number,
    public status: string
  ) {}
}
