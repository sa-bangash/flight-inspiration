import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FlightDestinationsAPI from '@core/api-models/flight-destinations.api-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightDestinationsService {
  constructor(private http: HttpClient) {}

  load(): Observable<FlightDestinationsAPI> {
    return this.http.get(
      'assets/mocks/flight-destinations.json'
    ) as Observable<FlightDestinationsAPI>;
  }
}
