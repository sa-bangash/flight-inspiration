import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import FlightDesginationParam from '@core/models/flight-destination-param.model';
import CITIES from '@share/constants/cities.constant';

@Injectable({
  providedIn: 'root',
})
export class FlightInspirationFilterFacade {
  private filterSource = new BehaviorSubject<FlightDesginationParam>({
    origin: '',
  });

  filter$ = this.filterSource.asObservable();

  private citiesOptionSource = new BehaviorSubject(CITIES);
  citiesoption$ = this.citiesOptionSource.asObservable();

  constructor() {}

  setFilter(filter: FlightDesginationParam) {
    this.filterSource.next(filter);
  }
}
