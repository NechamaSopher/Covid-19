import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {

  private baseUrl: string = 'http://localhost:3000/api/country-info';

  constructor(private http: HttpClient) { }

  getTopTotalCases(): Observable<any> {
    return this.http.get(`${this.baseUrl}/top-total-cases`);
  }

  downloadXlsx(): Observable<any> {
    return this.http.get(`${this.baseUrl}/download-xlsx`);
  }
}
