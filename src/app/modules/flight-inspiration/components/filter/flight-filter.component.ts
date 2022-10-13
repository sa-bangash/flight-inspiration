import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import FlightDesginationParam from '@core/models/flight-destination-param.model';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FlightInspirationFilterFacade } from '../../stores/flight-inspiration-filter.facade';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss'],
})
export class FlightFilterComponent implements OnInit, OnDestroy {
  form = this.getForm();
  viewByOption = ['DATE', 'DESTINATION', 'DURATION', 'WEEK', 'COUNTRY'];
  sub = new Subscription();
  constructor(
    private fb: FormBuilder,
    private facade: FlightInspirationFilterFacade
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.form.valueChanges
        .pipe(filter((item) => item?.origin?.code))
        .subscribe((resp) => {
          this.facade.setFilter(this.mapToParam(resp));
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  mapToParam(value: FilterForm): FlightDesginationParam {
    return {
      ...value,
      origin: value.origin.code,
      ...(value.departureDate && {
        departureDate: format(value.departureDate, 'yyyy-MM-dd'),
      }),
    };
  }

  private getForm() {
    return this.fb.group({
      origin: [null, [Validators.required]],
      departureDate: '',
      oneWay: false,
      duration: '',
      nonStop: false,
      maxPrice: '',
      viewBy: '',
    });
  }

  get originCtrl(): FormControl {
    return this.form.get('origin') as FormControl;
  }
}

interface FilterForm {
  origin: { code: string; city: string };
  departureDate: Date;
  oneWay: boolean;
  duration: string;
  nonStop: boolean;
  maxPrice: string;
  viewBy: string;
}
