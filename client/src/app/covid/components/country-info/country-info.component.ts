import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  countries: any[];
  selectedCountry: any;
  numNewCases: number;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getAll().subscribe(({ data }) => this.countries = data);
  }

  selectCounry(countryId: string): void {
    this.countryService.getNewCases(countryId)
      .subscribe(({ data }) => this.numNewCases = data);
  }

}
