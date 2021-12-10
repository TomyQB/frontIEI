import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private url = "http://localhost:8000/load?"

  constructor(private http: HttpClient) { }

  cargar(endpoint: string): Observable<any> {
    console.log(this.url + endpoint)
    return this.http.get<any>(/* this.url + endpoint */"http://localhost:8000/load?ca=val");
  }
}
