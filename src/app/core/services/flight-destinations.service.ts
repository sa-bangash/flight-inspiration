import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FlightDestinationsAPI from '@core/api-models/flight-destinations.api-model';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { Observable, delay, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlightDestinationsService {
  constructor(private http: HttpClient) {}

  load(queryParam: FlightDesginationParam): Observable<FlightDestinationsAPI> {
    const params = new HttpParams({
      fromObject: { ...queryParam },
    });
    return this.http
      .get('assets/mocks/flight-destinations.json', { params })
      .pipe(
        delay(1000),
        map((resp) => ({ ...resp }))
      ) as Observable<FlightDestinationsAPI>;
  }
}
