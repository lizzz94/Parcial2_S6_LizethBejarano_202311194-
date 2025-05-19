import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';


@NgModule({
  imports: [
    CommonModule,
    FlightListComponent
  ],
  declarations: [FlightListComponent],
  exports: [FlightListComponent]
})
export class FlightModule { }
