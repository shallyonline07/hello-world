import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  // currentDate = Date.now();
  lowercaseString = 'hello how are you';
  uppercaseString = 'HELLO BELLO';
  amountValue = 2234.56;
  decimalValue = 123456.123446;
  someValue = 1.259;

  name = 'Maahi';

  currentDate = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
