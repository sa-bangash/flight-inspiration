import { Injectable } from '@angular/core';
import FlightDestinationsAPI from '@core/api-models/flight-destinations.api-model';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { FlightDestinationsService } from '@core/services/flight-destinations.service';
import { BehaviorSubject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightInspirationFacade {
  private dataSource = new BehaviorSubject<FlightDestinationsAPI>({
    data: [],
  } as FlightDestinationsAPI);
  data$ = this.dataSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor(private service: FlightDestinationsService) {}

  load(param: FlightDesginationParam) {
    this.showLoader();
    this.service
      .load(param)
      .pipe(finalize(() => this.hideLoader()))
      .subscribe((data) => {
        this.dataSource.next(data);
      });
  }

  private showLoader() {
    this.loadingSource.next(true);
  }

  private hideLoader() {
    this.loadingSource.next(false);
  }
}
