import { FlightDestination } from '@core/models/flight-destination.model';

export default interface FlightDestinationsAPI {
  data: FlightDestination[];
  dictionaries: FlightDestinationsDictionaries;
}

export interface FlightDestinationsDictionaries {
  currencies: {
    [key: string]: string;
  };
  locations: {
    [key: string]: {
      subType: string;
      detailName: string;
    };
  };
}
