import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menudeo } from '../models/menudeo';

@Injectable({
  providedIn: 'root',
})
export class MenudeoService {
  private apiUrl = 'http://localhost:8080/menudeo/';
  constructor(private http: HttpClient) {}

  getMenudeo(): Observable<Menudeo[]> {
    return this.http.get<Menudeo[]>(this.apiUrl);
  }
}
