import { Component, Input, OnInit } from '@angular/core';
import { FlightDestination } from '@core/models/flight-destination.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  @Input()
  data: FlightDestination[] = [];
  constructor() {}

  ngOnInit(): void {}
}
