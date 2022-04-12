import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, delay, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { CommonServiceService } from '../../services/common-service.service';
import { combineLatest, of } from 'rxjs';

export interface Student {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  studentData: Student[] = [];
  showData: boolean = false;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    // this.mapExample();
    // this.filterExample();
    this.tapExample('Javascript closure example');
    this.takeExample('Javascript closure example');
    // this.switchMapExample();
    // this.combineLatestExample();
    this.catchErrorExample();    
    this.delayExample();    
    this.debounceTimeExample();    
  }

  mapExample() {
    const values$ = of([1,2,3,4,5]);

    values$
      .pipe(
        map(valArray => {
          return valArray.map(x => x * 10)
        })
      )
      .subscribe(response => {
        console.log(response);
      })
  }

  filterExample() {
    // update the db.json data such that students = []
    this.commonService.getStudents()
      .pipe(
        filter(response => response.length > 0)
        // filter(response => !!response)
        // filter(response => Boolean(response))
      )
      .subscribe(value => {
        console.log(value);
      })
  }

  tapExample(value: string) {
    this.commonService.getStudents()
      .pipe(
        tap(() => {
          this.showData = true;
          console.log(value);
          
        }),
      )
      .subscribe(response => console.log(response))
  }

  takeExample(value: string) {
    this.commonService.getStudents()
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response);
        console.log(value);
        
      })
  }

  switchMapExample() {
    const id$ = of(5);
    id$
      .pipe(
        switchMap(id => this.commonService.getPostById(id)),
        take(1)
      )
      .subscribe(response => {
        console.log(response);
      })
  }

  combineLatestExample() {
    
    combineLatest([
      this.commonService.getStudents(),
      this.commonService.getPosts()
    ]).pipe(
      filter(([students, posts]) => !!students && !!posts)
    ).subscribe(([students, posts]) => {
      console.log('students', students);
      console.log('posts', posts);
    });
  }

  catchErrorExample() {
    // bring the json server down.
    this.commonService.getStudents()
      .pipe(
        map(response => response),  // not needed if you are returning as it is.
        catchError(error => {
          console.log(error);
          return of('error occurred');
        }),
        // it is executed in success as well as error case
        finalize(() => console.log('execute some finalize code'))
      )
      .subscribe(response => {
        console.log(response);
      })
  }

  delayExample() {
    this.commonService.getStudents()
      .pipe(delay(4000))
      .subscribe((response) => {
        console.log(response);
      })
  }

  debounceTimeExample() {
    this.commonService.getStudents()
      .pipe(debounceTime(4000))
      .subscribe((response) => {
        console.log(response);
      })
  }

}
