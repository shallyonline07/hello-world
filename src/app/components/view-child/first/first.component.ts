import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, AfterViewInit {
  @ViewChild('second') second: SecondComponent;
  @ViewChild('para') para: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.second);
    console.log(this.para);
  }

  ngAfterViewInit(): void {
    console.log(this.second);
    console.log(this.para);
    this.para.nativeElement.style.color = 'red';
  }

  calculateSum() {
    this.second.computeSum(10, 20);
  }



}
