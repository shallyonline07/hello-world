import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  info: string = "asdfsdf";
  sum: number;
  constructor() { }

  ngOnInit(): void {
    
  }
  computeSum(x:number, y:number) {
    this.sum = x+y;
  }
}
