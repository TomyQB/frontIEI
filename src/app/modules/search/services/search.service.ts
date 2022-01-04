import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cities, Libraries } from '../models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiBaseUrl = environment.apiBaseurl;

  constructor(
    private http: HttpClient
  ) { }

  getLocations(): Observable<Cities>{
    return this.http.get<Cities>(`${this.apiBaseUrl}/locations`);
  }

  getLibraries(
    city: string,
    postalCode: string,
    province: string,
    type: string
  ): Observable<Libraries>{
    console.log(`${this.apiBaseUrl}/libraries?locality_id=${city}&province_id=${province}&state_id=${postalCode}&type=${type}`);
    return this.http.get<Libraries>(`${this.apiBaseUrl}/libraries?locality_id=${postalCode}&province_id=${province}&state_id=${city}&type=${type}`);
  }

  getAllLibraries(): Observable<Libraries>{
    return this.http.get<Libraries>(`${this.apiBaseUrl}/libraries?`);
  }
}
