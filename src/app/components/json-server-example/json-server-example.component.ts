
import { CommonServiceService } from './../../services/common-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export interface Student {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-json-server-example',
  templateUrl: './json-server-example.component.html',
  styleUrls: ['./json-server-example.component.scss']
})
export class JsonServerExampleComponent implements OnInit, OnDestroy {
  // data: Student[];
  data$: Observable<Student[]>;

  subscription: Subscription = new Subscription();
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    // this.subscription.add(
    //   this.commonService.getStudents().subscribe(response => {
    //     this.data = response;
    // }));

    this.data$ = this.commonService.getStudents();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
