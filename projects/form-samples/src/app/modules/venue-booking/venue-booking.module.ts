import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { VenueBookingRoutingModule } from './venue-booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, SharedModule, VenueBookingRoutingModule],
})
export class VenueBookingModule {}
