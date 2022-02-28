import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  sum: number;
  constructor() { }

  ngOnInit(): void {
  }

  computeSum(x: number, y: number) {
    this.sum = x + y;
  }

}
