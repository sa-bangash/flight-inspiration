import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  FlightFilterForm,
  CityOption,
} from '../../models/flight-filter-form.model';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss'],
})
export class FlightFilterComponent implements OnInit, OnDestroy {
  @Input() defaultValue: Partial<FlightFilterForm> = null;
  @Input() citiesOptions: CityOption[] = [];

  @Output() onValueChange = new EventEmitter<FlightFilterForm>();

  form = this.getForm();
  viewByOption = ['DATE', 'DESTINATION', 'DURATION', 'WEEK', 'COUNTRY'];
  sub = new Subscription();
  durationsOptions = new Array(15).fill(15).map((_, i) => i + 1);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue(this.defaultValue);
    this.sub.add(
      this.form.valueChanges
        .pipe(filter((item) => item?.origin?.code))
        .subscribe((resp) => {
          this.onValueChange.next(resp);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
