import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flights-inspiration',
    loadChildren: () =>
      import('./modules/flight-inspiration/flight-inspiration.module').then(
        (m) => m.FlightInspirationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
