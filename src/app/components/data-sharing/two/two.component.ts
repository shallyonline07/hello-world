import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit, OnDestroy {
  // studentName$: Observable<string>;
  studentName: string;
  sub = new Subscription();


  constructor(private commonServiceService: CommonServiceService) { }

  ngOnInit(): void {
    // this.studentName$ = this.commonServiceService.name$;
    this.sub.add(
      this.commonServiceService.name$.subscribe(response => {
        this.studentName = response;
      })
    )

  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  

}
