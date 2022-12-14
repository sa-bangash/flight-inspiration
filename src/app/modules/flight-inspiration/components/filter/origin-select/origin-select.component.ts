import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlightOrigin } from '@core/models/flight-origin.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-origin-select',
  templateUrl: './origin-select.component.html',
  styleUrls: ['./origin-select.component.scss'],
})
export class OriginSelectComponent implements OnInit {
  @Input()
  form!: FormControl;
  @Input()
  options: FlightOrigin[] = [];
  filtered$!: Observable<FlightOrigin[]>;
  constructor() {}

  ngOnInit(): void {
    this.filtered$ = this.form.valueChanges.pipe(
      map((q: string) => this.filter(q))
    );
  }

  displayFn(value: FlightOrigin) {
    if (!value) return '';
    return `${value?.city} (${value?.code})`;
  }

  private filter(value: string): FlightOrigin[] {
    if (typeof value === 'string') {
      const filterValue = value?.toLowerCase();
      return this.options.filter((option) =>
        option.city.toLowerCase().includes(filterValue)
      );
    }
    return this.options;
  }
}
