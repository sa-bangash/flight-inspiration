import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightInspirationComponent } from './flight-inspiration.component';
import { RouterModule, Routes } from '@angular/router';
import { FlightFilterComponent } from './components/filter/flight-filter.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '@share/share.module';
import { OriginSelectComponent } from './components/filter/origin-select/origin-select.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';

const routes: Routes = [
  {
    path: '',
    component: FlightInspirationComponent,
  },
];

@NgModule({
  declarations: [
    FlightInspirationComponent,
    FlightFilterComponent,
    FlightCardComponent,
    OriginSelectComponent,
    FlightListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ShareModule,
  ],
})
export class FlightInspirationModule {}
