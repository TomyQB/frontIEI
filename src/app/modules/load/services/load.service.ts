import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private url = "http://localhost:8000/load?"

  constructor(private http: HttpClient) { }

  cargar(endpoint: string) {
    console.log(this.url + endpoint)
    return this.http.get(this.url + endpoint);
  }
}
