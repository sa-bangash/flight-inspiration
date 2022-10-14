export interface FlightFilterForm {
  origin: { code: string; city: string };
  departureDate: Date;
  oneWay: boolean;
  duration: number[];
  nonStop: boolean;
  maxPrice: string;
  viewBy: string;
}

export interface CityOption {
  code: string;
  city: string;
}
