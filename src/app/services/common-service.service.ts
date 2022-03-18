import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  url = 'http://localhost:3000/students';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  private nameSubject = new BehaviorSubject<string>('');
  name$ = this.nameSubject.asObservable();
 
  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getPosts(): Observable<string[]> {
    return this.http.get<string[]>(this.postsUrl);
  }

  getPostById(id: number): Observable<string> {
    return this.http.get<string>(this.postsUrl + '/'+ id)
  }


  updateName(value: string) {
    this.nameSubject.next(value);
  }

}
