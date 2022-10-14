import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, Subscription } from 'rxjs';
import { FlightFilterContainer } from './containers/flight-filter.container/flight-filter.container';
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

  isMobile$ = this.breakpointObserver.observe(['(max-width: 719px)']).pipe(
    map((state: BreakpointState) => {
      return state.matches;
    })
  );
  constructor(
    private facade: FlightInspirationFacade,
    private filterFacade: FlightInspirationFilterFacade,
    private dialog: MatDialog,
    public breakpointObserver: BreakpointObserver
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
  onFilterShow() {
    const filterComponent = this.dialog.open(FlightFilterContainer, {
      disableClose: true,
    });
    filterComponent.componentInstance.isMobile$ = this.isMobile$;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
