import { Child1Component } from '../child1/child1.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  @ViewChild('child1') child1componet: Child1Component;

  constructor() { }

  ngOnInit(): void {
    // this.child1componet.info;  
  }


  ngAfterViewInit(): void {
    console.log(this.child1componet.info)
  }

  calculate() {
    this.child1componet.computeSum(10, 20);


  }
}
