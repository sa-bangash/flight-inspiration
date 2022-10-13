import { Component, Input, OnInit } from '@angular/core';
import { FlightDestination } from '@core/models/flight-destination.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input()
  data: FlightDestination;
  constructor() {}

  ngOnInit(): void {}
}
