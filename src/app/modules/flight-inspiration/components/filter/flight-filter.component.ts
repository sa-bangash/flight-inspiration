import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightOrigin } from '@core/models/flight-origin.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss'],
})
export class FlightFilterComponent implements OnInit {
  form = this.getForm();
  viewByOption = ['DATE', 'DESTINATION', 'DURATION', 'WEEK', 'COUNTRY'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((resp) => {
      console.log(resp);
    });
  }

  private getForm() {
    return this.fb.group({
      origin: [],
      departureDate: [],
      oneWay: false,
      duration: [],
      nonStop: false,
      maxPrice: [],
      viewBy: [''],
    });
  }

  get originCtrl(): FormControl {
    return this.form.get('origin') as FormControl;
  }
}
