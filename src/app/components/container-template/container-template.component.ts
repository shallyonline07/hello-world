import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-template',
  templateUrl: './container-template.component.html',
  styleUrls: ['./container-template.component.scss']
})
export class ContainerTemplateComponent implements OnInit {

  studentData = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
