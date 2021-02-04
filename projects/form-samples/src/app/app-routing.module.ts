import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'booking', loadChildren: () => import('./modules/venue-booking/venue-booking.module').then(m => m.VenueBookingModule) },
  { path:'', redirectTo:'booking', pathMatch: 'full' },
  { path:'**', redirectTo:'booking', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
