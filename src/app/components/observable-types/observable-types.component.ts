import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-observable-types',
  templateUrl: './observable-types.component.html',
  styleUrls: ['./observable-types.component.scss']
})
export class ObservableTypesComponent implements OnInit {
  posts$: Observable<string[]>;
  url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.posts$ = this.http.get<string[]>(this.url)
      .pipe(shareReplay());  // it transforms cold observable to hot observable.
  }

}
