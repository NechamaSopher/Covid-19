import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'http://localhost:3000/api/country';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getNewCases(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/new-cases`);
  }
}
