import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private commonServiceService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonServiceService.updateName('maahi');
  }

}
