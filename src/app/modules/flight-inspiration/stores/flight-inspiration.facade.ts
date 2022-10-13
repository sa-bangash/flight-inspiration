import { Injectable } from '@angular/core';
import FlightDestinationsAPI from '@core/api-models/flight-destinations.api-model';
import { FlightDestinationsService } from '@core/services/flight-destinations.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightInspirationFacade {
  dataSource = new BehaviorSubject<FlightDestinationsAPI>(null);
  data$ = this.dataSource.asObservable();
  constructor(private service: FlightDestinationsService) {}

  load() {
    this.service.load().subscribe((data) => {
      this.dataSource.next(data);
    });
  }
}
