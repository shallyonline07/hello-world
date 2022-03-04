import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  
  colorName = "text-danger";
  borderValue = "border: 5px solid blue";
  isDisabled = false;
  marginTop = "mt-5";
  url = "http://www.google.com";
  colSpanValue = "2";

  someValue = "10";
  ss= "shally";

  constructor() { }

  ngOnInit(): void {
  }

  logSomeValue() {
    // console.log('event binding done');
    
  }

  clearInputValue() {
    this.someValue = "";
  }

  // updateValue($event: any) {
  //   this.someValue = $event.target.value;
  // }
}
 
