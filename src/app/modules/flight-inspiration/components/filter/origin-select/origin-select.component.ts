import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlightOrigin } from '@core/models/flight-origin.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-origin-select',
  templateUrl: './origin-select.component.html',
  styleUrls: ['./origin-select.component.scss'],
})
export class OriginSelectComponent implements OnInit, AfterViewInit {
  @Input()
  form!: FormControl;
  originOptions: FlightOrigin[] = [{ code: 'ISB', city: 'Islamabad' }];
  filtered$!: Observable<FlightOrigin[]>;
  @ViewChild('inputRef') inputRef: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {
    this.filtered$ = this.form.valueChanges.pipe(
      map((q: string) => this.filter(q))
    );
  }

  ngAfterViewInit(): void {
    // this.inputRef.nativeElement.focus();
  }

  displayFn(value: FlightOrigin) {
    if (!value) return '';
    return `${value?.city} (${value?.code})`;
  }

  private filter(value: string): FlightOrigin[] {
    if (typeof value === 'string') {
      const filterValue = value?.toLowerCase();
      return this.originOptions.filter((option) =>
        option.city.toLowerCase().includes(filterValue)
      );
    }
    return this.originOptions;
  }
}
