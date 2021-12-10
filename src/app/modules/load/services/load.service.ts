import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private url = "http://localhost:8000/load?"

  constructor(private http: HttpClient) { }

  cargar(endpoint: string) {
    console.log(this.url + endpoint)
    return this.http.post(this.url + endpoint, null);
  }
}
