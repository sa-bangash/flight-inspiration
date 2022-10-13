import { Component, OnInit } from '@angular/core';
import { FlightInspirationFacade } from './stores/flight-inspiration.facade';

@Component({
  selector: 'app-flight-inspiration',
  templateUrl: './flight-inspiration.component.html',
  styleUrls: ['./flight-inspiration.component.scss'],
})
export class FlightInspirationComponent implements OnInit {
  data$ = this.facade.data$;
  constructor(private facade: FlightInspirationFacade) {}

  ngOnInit(): void {
    this.facade.load();
    this.data$.subscribe((resp) => console.log(resp));
  }
}
