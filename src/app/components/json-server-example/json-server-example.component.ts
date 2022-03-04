
import { CommonServiceService } from './../../services/common-service.service';
import { Component, OnInit } from '@angular/core';
export interface Student {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-json-server-example',
  templateUrl: './json-server-example.component.html',
  styleUrls: ['./json-server-example.component.scss']
})
export class JsonServerExampleComponent implements OnInit {
  data: Student[];
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.getStudents().subscribe(response => {
      // console.log(response);
      this.data = response;
    })
  }

}
