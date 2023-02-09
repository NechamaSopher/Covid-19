import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  tabs: any[];
  selectedTab: 'NEW_CASES' | 'TOP_TOTALS' = 'NEW_CASES';

  constructor() {
    this.tabs = [{ key: 'NEW_CASES', value: 'New Cases' }, { key: 'TOP_TOTALS', value: 'Top Totals' }];
  }

  ngOnInit(): void {
  }

  selectTab(tab: any): void {
    if (this.selectedTab === tab) return;

    this.selectedTab = tab;
  }

}
