import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { TopTotalCasesComponent } from './components/top-total-cases/top-total-cases.component';
import { CovidComponent } from './components/covid/covid.component';


@NgModule({
  declarations: [
    CountryInfoComponent,
    TopTotalCasesComponent,
    CovidComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule
  ]
})
export class CovidModule { }
