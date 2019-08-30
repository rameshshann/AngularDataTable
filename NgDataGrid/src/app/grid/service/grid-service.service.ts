import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get('../../../assets/json/employee.json');
}
}
