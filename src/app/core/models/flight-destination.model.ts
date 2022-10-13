export interface FlightDestination {
  type: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  price: FlightDestinationPrice;
  links: FlightDestinationLinks;
}

export interface FlightDestinationPrice {
  total: string;
}

export interface FlightDestinationLinks {
  flightDates: string;
  flightOffers: string;
}
