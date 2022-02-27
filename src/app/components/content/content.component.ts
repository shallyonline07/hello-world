import { Component, OnInit } from '@angular/core';

export interface Student {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  showStatus: boolean;
  studentData: Student[];
  age = 65;

  constructor() { }

  ngOnInit(): void {
    this.showStatus = false;
    this.studentData = [
      {
        name: 'Maahi',
        age: 4,
        address: 'Bowmanville'
      },
      {
        name: 'Mishti',
        age: 12,
        address: 'Scarborough'
      },
    ];
  }

  toggleStatus() {
    this.showStatus = !this.showStatus;
    // console.log("uyyuy");
    
    
  }

}
