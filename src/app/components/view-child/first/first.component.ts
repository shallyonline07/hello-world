import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @ViewChild(SecondComponent) second: SecondComponent;
  constructor() { }

  ngOnInit(): void {

  }

  calculateSum() {
    this.second.computeSum(10, 20);
  }



}
