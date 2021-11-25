import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  public getCrudData() {
    return this.http.get(this.baseUrl + 'data');
  }
}
