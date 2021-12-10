import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private url = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  cargar(endpoint: string) {
    return this.http.post(this.url + "load?" + endpoint, null);
  }

  delete() {
    return this.http.delete(this.url);
  }
}
