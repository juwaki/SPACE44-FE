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

  public getUserCrudData(id: number) {
    return this.http.get(this.baseUrl + 'data/' + id);
  }

  public postCrudData(first: string, last: string, email: string, phone: string, location: string, hobby: string) {
    return this.http.post(this.baseUrl + 'data/add', { first, last, email, phone, location, hobby })
  }

  public deleteCrudData(id: number){
    return this.http.delete(this.baseUrl + 'data/' + id);
  }

}
