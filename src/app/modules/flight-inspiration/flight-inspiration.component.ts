import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { FlightInspirationFilterFacade } from './stores/flight-inspiration-filter.facade';
import { FlightInspirationFacade } from './stores/flight-inspiration.facade';

@Component({
  selector: 'app-flight-inspiration',
  templateUrl: './flight-inspiration.component.html',
  styleUrls: ['./flight-inspiration.component.scss'],
})
export class FlightInspirationComponent implements OnInit, OnDestroy {
  data$ = this.facade.data$;
  loading$ = this.facade.loading$;
  sub = new Subscription();
  filter$ = this.filterFacade.filter$;
  constructor(
    private facade: FlightInspirationFacade,
    private filterFacade: FlightInspirationFilterFacade
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.filter$
        .pipe(filter((param) => !!param.origin))
        .subscribe((filter) => {
          this.facade.load(filter);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
