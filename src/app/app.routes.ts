import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { NotFoundComponent } from './features/not-found/not-found.component';


export const routes: Routes = [
   { path: '', component: LandingComponent },
  { path: '**', component:NotFoundComponent }
];
