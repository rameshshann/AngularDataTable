import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private dataSource = new BehaviorSubject('default message');
  currentData = this.dataSource.asObservable();

  constructor(private http: HttpClient) {
    console.log('test');
   }

  list(path: any): Observable<any> {
    return this.http.get(path);
}
  fetchData(data: any) {
    return this.dataSource.next(data);
  }
}
