import { Component, Input, OnInit } from '@angular/core';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { format, isValid } from 'date-fns';
import { BehaviorSubject, Observable, take, withLatestFrom } from 'rxjs';
import { FlightFilterForm } from '../../models/flight-filter-form.model';
import { FlightInspirationFilterFacade } from '../../stores/flight-inspiration-filter.facade';

@Component({
  selector: 'app-flight-filter-container',
  templateUrl: './flight-filter.container.html',
  styleUrls: ['./flight-filter.container.scss'],
})
export class FlightFilterContainer implements OnInit {
  @Input()
  isMobile$: Observable<boolean>;

  defaultFilterValue: Partial<FlightFilterForm>;
  citiesOption$ = this.facade.citiesoption$;
  params: FlightDesginationParam;
  constructor(private facade: FlightInspirationFilterFacade) {}

  ngOnInit(): void {
    this.setFilter();
  }

  onFilterChange(value: FlightFilterForm) {
    this.params = this.mapToParam(value);
    this.notify();
  }

  filterChangeOnMobile(value: FlightFilterForm) {
    this.params = this.mapToParam(value);
  }

  mapToParam(value: FlightFilterForm): FlightDesginationParam {
    return {
      ...value,
      origin: value.origin.code,
      duration: value.duration.toString(),
      ...(value.departureDate && {
        departureDate: isValid(value.departureDate)
          ? format(value.departureDate, 'yyyy-MM-dd')
          : null,
      }),
    };
  }

  notify(): void {
    if (this.params) {
      this.facade.setFilter(this.params);
    }
  }

  private setFilter(): void {
    this.facade.filter$
      .pipe(take(1), withLatestFrom(this.citiesOption$))
      .subscribe(([params, options]) => {
        this.defaultFilterValue = {
          ...params,
          origin: options.find((item) => item.code === params.origin),
          duration: params.duration?.split(',').map((item) => +item) || [],
          departureDate: params.departureDate && new Date(params.departureDate),
        };
      });
  }
}
