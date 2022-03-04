import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerTitle: string;

  constructor() {
    // console.log('in constructor');
    
   }

  ngOnInit(): void {
    // console.log('hello');
    this.headerTitle = 'Welcome to my page';
  }

}
