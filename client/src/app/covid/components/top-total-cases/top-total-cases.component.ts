import { Component, OnInit } from '@angular/core';
import { writeFile, utils } from 'xlsx';

import { CountryInfoService } from '../../services/country-info.service';

@Component({
  selector: 'app-top-total-cases',
  templateUrl: './top-total-cases.component.html',
  styleUrls: ['./top-total-cases.component.scss']
})
export class TopTotalCasesComponent implements OnInit {

  dataSource: any[];

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.loadInfo();
  }

  // Get from db top total cases and deaths of ten countries
  loadInfo(): void {
    this.countryInfoService.getTopTotalCases()
      .subscribe(({ data }) => this.dataSource = data);
  }

  // Downloads info in CSV file
  downloadFile(): void {
    const headers = {
      countryName: 'Country name',
      totalCases: 'Total cases',
      totalDeaths: 'Total deaths',
    };

    const order = ['countryName', 'totalCases', 'totalDeaths'];

    const workbook = utils.book_new();
    const sheet = utils.json_to_sheet([headers, ...this.dataSource], { header: order, skipHeader: true });
    utils.book_append_sheet(workbook, sheet, 'top totals');

    writeFile(workbook, `top totals.xlsx`);
  }
}

