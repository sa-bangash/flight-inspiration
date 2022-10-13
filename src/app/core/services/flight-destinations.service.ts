import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FlightDestinationsAPI from '@core/api-models/flight-destinations.api-model';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { Observable, delay, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlightDestinationsService {
  constructor(private http: HttpClient) {}

  load(param: FlightDesginationParam): Observable<FlightDestinationsAPI> {
    return this.http.get('assets/mocks/flight-destinations.json').pipe(
      delay(2000),
      map((resp) => ({ ...resp, data: [] }))
    ) as Observable<FlightDestinationsAPI>;
  }
}
