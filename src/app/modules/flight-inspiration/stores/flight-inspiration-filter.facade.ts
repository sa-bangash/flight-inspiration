import { Injectable } from '@angular/core';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightInspirationFilterFacade {
  filterSource = new BehaviorSubject<FlightDesginationParam>({
    origin: '',
  });

  filter$ = this.filterSource.asObservable();
  constructor() {}

  setFilter(filter: FlightDesginationParam) {
    this.filterSource.next(filter);
  }
}
