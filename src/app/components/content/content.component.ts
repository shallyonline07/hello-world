import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  showStatus: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showStatus = false;
  }

  toggleStatus() {
    this.showStatus = !this.showStatus;
    // console.log("uyyuy");
    
  }

}
