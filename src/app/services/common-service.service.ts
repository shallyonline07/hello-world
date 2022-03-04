import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  url = 'http://localhost:3000/students';

  private nameSubject = new BehaviorSubject<string>('');
  name$ = this.nameSubject.asObservable();
 
  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }



  updateName(value: string) {
    this.nameSubject.next(value);
  }

}
