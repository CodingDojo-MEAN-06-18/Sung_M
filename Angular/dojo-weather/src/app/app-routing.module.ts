import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: [],
  },

  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: [],
  },

  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: [],
  },

  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent,
    children: [],
  },

  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: [],
  },

  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: [],
  },
  {
    path: 'washingtondc',
    pathMatch: 'full',
    component: WashingtondcComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
