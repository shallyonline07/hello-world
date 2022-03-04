import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  sum: number = 0;
  message: string = 'I am a messgae in child component';
  constructor() { }

  ngOnInit(): void {
  }

  computeSum(x: number, y: number) {
    this. sum = x + y;
  }

}
